import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import AppToolbar from "src/components/AppToolbar";

export default function Game({ gameTitle }) {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/WebGL Builds.loader.js",
        dataUrl: "Build/WebGL Builds.data",
        frameworkUrl: "Build/WebGL Builds.framework.js",
        codeUrl: "Build/WebGL Builds.wasm",
    });
    return (
        <div className="App">
            <AppToolbar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    marginBottom: "5px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Box sx={{ borderBottom: "solid #D9D9D9", margin: "10px", width: "100%" }}>
                    <Typography variant="h6" color="#D9D9D9">
                        {gameTitle}
                    </Typography>
                </Box>
                <Divider sx={{ width: "100%" }} />
                <Box>
                    <Unity style={{ width: "50vw" }} unityProvider={unityProvider} />
                </Box>
            </Box>
        </div>
    );
}
