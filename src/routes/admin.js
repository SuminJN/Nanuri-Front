import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import LoginIng from "../services/LoginIng";
import {isActive} from "../functions/isActive";
import MySharing from "../pages/MySharing";

const today = new Date();
const userData = JSON.parse(window.sessionStorage.getItem("userData"));
const token = userData ? userData.exp : null;
const status = userData ? userData.status : null;

// 토큰 존재 + 유효 + 사용자 ADMIN인지 확인
const isAdmin = token !== null && status === "ADMIN" && token < today.getTime();
function Admin() {
    const [checkActive, setCheckActive] = useState(true);

    useEffect(() => {
        const activeStatus = isActive();
        setCheckActive(activeStatus);
        const path = window.location.pathname.replace(process.env.REACT_APP_DEPLOY_URL, "");
        const isRootOrMain = path === "/" || path === "" || path === "main";
        if (!activeStatus && !isRootOrMain) {
            alert("로그인 세션이 만료되었습니다. 초기 페이지로 돌아갑니다 (관리자 라우터)");
            console.log("로그인 세션이 만료되었습니다. 초기 페이지로 돌아갑니다 (관리자 라우터)");
            <Navigate to={process.env.REACT_APP_DEPLOY_URL} replace />;
        }
    }, []);

    return (
        <Routes>
            <Route path={process.env.REACT_APP_DEPLOY_URL + "/"} element={<Main />} />
            <Route path={process.env.REACT_APP_DEPLOY_URL + "detail"} element={<MySharing />} />
            <Route path={process.env.REACT_APP_DEPLOY_URL + "nanuri/callback"} element={<LoginIng />} />
        </Routes>
    );
}

export default Admin;
