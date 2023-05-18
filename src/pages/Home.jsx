import React from "react";
import AppToolbar from "src/components/AppToolbar";
import HomeContentList from "src/components/HomeContentList";

//임시 게임 리스트
const temparr = [
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
    { id: "85" },
];

//메인 홈페이지
const Home = () => {
    return (
        <div className="App">
            <AppToolbar />
            <HomeContentList title="제작 게임" contents={temparr} />
            <HomeContentList title="추천 게임" contents={temparr} />
        </div>
    );
};
export default Home;
