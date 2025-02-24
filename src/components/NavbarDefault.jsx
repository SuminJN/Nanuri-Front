import {Navbar, Container, Nav, Button} from "react-bootstrap";
import LoginBtn from "./login/LoginBtn";
import {useNavigate} from "react-router-dom";
import {isActive} from "../functions/isActive";

function NavbarDefault() {
    const navigate = useNavigate();

    const userData = JSON.parse(window.sessionStorage.getItem("userData"));
    const token = userData ? userData.exp : null;

    // 로그아웃 시도 시 사용하는 기능 -> 세션스토리지 값 지우고 메인화면으로 되돌림
    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Nanuri</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="/mysharing">나의 나눔</Nav.Link>
                        <Nav.Link href="/chat">채팅</Nav.Link>
                        <Nav.Link href="/ranking">나눔 랭킹</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* 세션스토리지의 토큰 값이 유효하면 로그아웃 버튼, 유요하지 않으면 로그인 버튼 출력 */}
                        {token != null && isActive()
                            ? <Button className="h4" onClick={handleLogout}>로그아웃</Button>
                            : <LoginBtn/>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDefault;