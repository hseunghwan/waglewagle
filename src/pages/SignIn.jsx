import React from "react";
import AppToolbar from "src/components/AppToolbar";
import { Box, Typography, Button } from "@mui/material";
import { GAME_NAME } from "src/consts/text";
import SignInputBase from "src/components/styled/SignInputBase";

export default function SignIn() {
    return (
        <div className="App">
            <AppToolbar />
            <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <Typography>{GAME_NAME}</Typography>
                <SignInputBase></SignInputBase>
                <SignInputBase></SignInputBase>
                <Button></Button>
            </Box>
        </div>
    );
}
