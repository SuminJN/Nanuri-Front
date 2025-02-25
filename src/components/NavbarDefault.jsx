import React from "react";
import "../css/navbar.css";
import Logo from "../assets/logo.png";

import {Navbar, Container, Nav, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {tokenState} from "../recoil/atoms/tokenState";


function NavbarDefault() {
    const navigate = useNavigate();

    const userData = useRecoilValue(tokenState);
    const token = userData ? userData.exp : null;

    const isActive = () => {
        return token >= (new Date().getTime() + 1) / 1000;
    };

    const handleSignInClick = () => {
        window.location.href = process.env.REACT_APP_HISNET_LOGIN_URL;
    };

    // 로그아웃 시도 시 로컬스토리지 값 지우고 메인화면으로 되돌림
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <Navbar className="navbar-bg-color" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} alt="" width="24px" />
                        NANURI
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="/mysharing">나의 나눔</Nav.Link>
                        <Nav.Link href="/chat">채팅</Nav.Link>
                        <Nav.Link href="/ranking">나눔 랭킹</Nav.Link>
                    </Nav>
                    {/* 세션스토리지의 토큰 값이 유효하면 로그아웃 버튼, 유요하지 않으면 로그인 버튼 출력 */}
                    {isActive()
                        ?
                        <Nav className="gap-4">
                            <Navbar.Text>{userData.name} 님</Navbar.Text>
                            <button className="nav-btn py-2 px-3" onClick={handleLogout}>로그아웃</button>
                        </Nav>
                        :
                        <Nav>
                            <button className="nav-btn py-2 px-3" onClick={handleSignInClick}>
                                로그인
                            </button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDefault;