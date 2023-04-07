import "src/App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "src/pages/Home";
import Error from "src/pages/Error";
import SignIn from "src/pages/SignIn";
import SignUp from "src/pages/SignUp";
import MyPage from "src/pages/MyPage";
import Game from "src/pages/Game";
import Bookmark from "src/pages/Bookmark";

//페이지 라우팅
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/SignIn",
        element: <SignIn />,
    },
    {
        path: "/SignUp",
        element: <SignUp />,
    },
    {
        path: "/MyPage",
        element: <MyPage />,
    },
    {
        path: "/Game",
        element: <Game />,
    },
    {
        path: "/Bookmark",
        element: <Bookmark />,
    },
]);

function App() {
    // 라우터를 전역으로 사용할 수 있도록 RouterProvider로 감싸줍니다.
    return <RouterProvider router={router} />;
}

export default App;
