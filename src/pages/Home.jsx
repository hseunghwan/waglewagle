import React from "react";
import AppToolbar from "src/components/AppToolbar";
import HomeContentList from "src/components/HomeContentList";
import { gameList } from "src/consts/gameList";
//제작게임 리스트
const madeGameList = [
    { id: "1", name: "플래피 버드" },
    { id: "2", name: "언데드 서바이버" },
    { id: "3", name: "테트리스" },
];

//임시 게임 리스트

//메인 홈페이지
const Home = () => {
    return (
        <div className="App">
            <AppToolbar />
            <HomeContentList title="제작 게임" contents={madeGameList} />
            <HomeContentList title="추천 게임" contents={gameList} />
        </div>
    );
};
export default Home;
