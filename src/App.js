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
    return <RouterProvider router={router} />;
}

export default App;
