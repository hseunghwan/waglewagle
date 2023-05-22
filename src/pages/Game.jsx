import React, { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import AppToolbar from "src/components/AppToolbar";
import { useParams, useNavigate } from "react-router-dom";
import RufflePlayer from "src/components/RufflePlayer";

export default function Game() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, [id, navigate]);

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
                    <Box>
                        <img src={`/resource/img/${id}.jpg`} alt="content" />
                    </Box>
                    <RufflePlayer swfUrl={`/resource/swf/${id}.swf`} />
                </Box>
            </Box>
        </div>
    );
}
