import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

//게임 로고를 그려줄 컴포넌트
export default function ContentBox({ id }) {
    const navigate = useNavigate();

    const style = {
        width: "20vw",
        height: "20vw",
        backgroundColor: "#D9D9D9",
        borderRadius: "30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    };

    const handleClick = () => {
        navigate(`/Game/${id}`);
    };

    return (
        <Box onClick={handleClick} sx={style}>
            <img src={`resource/${id}.jpg`} alt="content" />
        </Box>
    );
}
