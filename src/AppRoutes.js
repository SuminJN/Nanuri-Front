import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MySharing from "./pages/MySharing";
import Chat from "./pages/Chat";
import Ranking from "./pages/Ranking";
import LoginIng from "./services/LoginIng";
import React from "react";
import {tokenState} from "./recoil/atoms/tokenState";
import {useRecoilValue} from "recoil";

function AppRoutes() {

    // token 유효성 검사를 위한 현재일자 가져오기
    const today = new Date();
    const userData = useRecoilValue(tokenState);
    const token = userData ? userData.exp : null;
    const status = userData ? userData.status : null;

    // 토큰 존재 + 유효 + 사용자 ADMIN인지 확인
    const isAdmin = token !== null && status === "ADMIN" && token < today.getTime();
    // 토큰 존재 + 유효 + 사용자 USER인지 확인
    const isUser = token !== null && status === "USER" && token < today.getTime();

    console.log("isAdmin:", isAdmin);
    console.log("isUser:", isUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={process.env.REACT_APP_DEPLOY_URL} element={<Main/>}/>
                <Route path={process.env.REACT_APP_DEPLOY_URL + "mysharing"} element={<MySharing/>}/>
                <Route path={process.env.REACT_APP_DEPLOY_URL + "chat"} element={<Chat/>}/>
                <Route path={process.env.REACT_APP_DEPLOY_URL + "ranking"} element={<Ranking/>}/>
                <Route path={process.env.REACT_APP_DEPLOY_URL + "nanuri/callback"} element={<LoginIng/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;