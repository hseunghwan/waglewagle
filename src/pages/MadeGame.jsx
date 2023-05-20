import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Unity, useUnityContext } from "react-unity-webgl";
import AppToolbar from "src/components/AppToolbar";
import { useParams, useNavigate } from "react-router-dom";

export default function MadeGame() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, [id, navigate]);

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
                        {id}
                    </Typography>
                </Box>
                <Divider sx={{ width: "100%" }} />
                <Box>
                    {isMounted && <Unity style={{ width: "50vw" }} unityProvider={unityProvider} />}
                    <Box>
                        <img src={`/resource/${id}.jpg`} alt="content" />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
