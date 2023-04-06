import React from "react";
import AppToolbar from "src/components/AppToolbar";
import { Unity, useUnityContext } from "react-unity-webgl";
import HomeContentList from "src/components/HomeContentList";

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
const Home = ({ sx }) => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/WebGL Builds.loader.js",
        dataUrl: "Build/WebGL Builds.data",
        frameworkUrl: "Build/WebGL Builds.framework.js",
        codeUrl: "Build/WebGL Builds.wasm",
    });

    return (
        <div className="App">
            <AppToolbar />
            <HomeContentList title="제작 게임" contents={temparr} />
            <Unity unityProvider={unityProvider} />
        </div>
    );
};
export default Home;
