import React from "react";
import AppToolbar from "src/components/AppToolbar";
import HomeContentList from "src/components/HomeContentList";

//임시 게임 리스트
const temparr = [
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
    { id: "gameid1", img: "path1" },
];

//메인 홈페이지
const Home = () => {
    //성원씨 유니티 게임을 가져오는 부분
    //https://youtu.be/D1lEBY0MzvQ

    return (
        <div className="App">
            <AppToolbar />
            <HomeContentList title="제작 게임" contents={temparr} />
            <HomeContentList title="추천 게임" contents={temparr} />
        </div>
    );
};
export default Home;
