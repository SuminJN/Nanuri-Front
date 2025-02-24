import React from "react";
import {Button} from "react-bootstrap";

function LoginBtn() {

    const handleSignInClick = () => {
        console.log("로그인 버튼 클릭");

        // 서버 배포용
        // window.location.href = "https://walab.info:8443/HisnetLogin/hisnet-login?accessKey=LByzLqghXnUp0SHHbHiI&returnUrl=https://happymanhgu.netlify.app/login-ing";

        // 로컬 개발용
        window.location.href = process.env.REACT_APP_HISNET_LOGIN_URL;
    };

    return (
        <Button className="h4" onClick={handleSignInClick}>
            로그인
        </Button>
    );
}

export default LoginBtn;
