import logo from "./logo.svg";
import AppToolbar from "./components/AppToolbar";
import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/WebGL Builds.loader.js",
        dataUrl: "Build/WebGL Builds.data",
        frameworkUrl: "Build/WebGL Builds.framework.js",
        codeUrl: "Build/WebGL Builds.wasm",
    });
    return (
        <div className="App">
            <AppToolbar />
            <Unity unityProvider={unityProvider} />
        </div>
    );
}

export default App;
