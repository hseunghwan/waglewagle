import React from "react";
import { Box } from "@mui/material";
export default function ContentBox() {
    const style = {
        width: "20vw",
        height: "20vw",
        backgroundColor: "#D9D9D9",
        borderRadius: "30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    };
    return <Box sx={style}></Box>;
}
