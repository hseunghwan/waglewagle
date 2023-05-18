import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ContentBox from "src/components/ContentBox";

//페이지 안에서 게임 리스트를 보여주는 컴포넌트
const HomeContentList = ({ title, contents }) => {
    //받아온 contents로 img
    return (
        <Box sx={{ width: "100%", marginBottom: "5px" }}>
            <Box sx={{ backgroundColor: "inherit", borderBottom: "solid #D9D9D9", margin: "10px" }}>
                <Typography variant="h6" color="#D9D9D9">
                    {title}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: "15px", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {contents.map((id) => (
                    <ContentBox id={id.id}></ContentBox>
                ))}
            </Box>
        </Box>
    );
};

export default HomeContentList;
