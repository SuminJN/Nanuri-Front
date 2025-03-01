import React from "react";

import {Navbar, Container, Nav, Image} from "react-bootstrap";
import {useNavigate, useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {tokenState} from "../recoil/atoms/tokenState";
import Button from "react-bootstrap/Button";
import {HeartOutlined, BellOutlined } from '@ant-design/icons';

function NavbarDefault() {
    const {pathname} = useLocation();
    console.log(pathname);
    const navigate = useNavigate();

    const token = useRecoilValue(tokenState);
    const tokenExp = token ? token.exp : null;

    const isActive = () => {
        return tokenExp >= (new Date().getTime() + 1) / 1000;
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
            <Navbar className="bg-white border-bottom" fixed="top">
                <Container>

                    <Navbar.Brand href="/" className="text-primary">
                        NANURI
                    </Navbar.Brand>

                    <Nav variant="underline" defaultActiveKey={pathname}>
                        <Nav.Link href="/items">나눔 목록</Nav.Link>
                        <Nav.Link href="/mysharing">나의 나눔</Nav.Link>
                        <Nav.Link href="/chat">채팅</Nav.Link>
                        <Nav.Link href="/ranking">나눔 랭킹</Nav.Link>
                    </Nav>

                    {/* 세션스토리지의 토큰 값이 유효하면 로그아웃 버튼, 유요하지 않으면 로그인 버튼 출력 */}
                    {isActive()
                        ? <Nav className="gap-3">
                            <div>
                                <Button
                                    className="rounded-circle border-white bg-body-tertiary text-black"><HeartOutlined /></Button>
                                <Button
                                    className="rounded-circle border-white bg-body-tertiary text-black mx-1"><BellOutlined /></Button>
                            </div>
                            <Navbar.Text> <a href="/profile">{token.name}</a> 님</Navbar.Text>
                            <Button className="py-2 px-3 bg-white text-primary" onClick={handleLogout}>로그아웃</Button>
                        </Nav>
                        : <Nav>
                            <Button className="py-2 px-3 bg-white text-primary" onClick={handleSignInClick}>
                                로그인
                            </Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDefault;