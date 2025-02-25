import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../css/footer.css";

function Footer() {
    return (
        <>
            <div className="">
                <Container>
                    <Row className="align-items-center g-0 border-top py-2">
                        {/* Desc */}
                        <Col md={6} sm={12} className="text-center text-md-start">
                            <span>© 2025 HGU NANURI</span>
                        </Col>
                        {/* Links */}
                        <Col md={6} sm={12}>
                            <nav className="nav nav-footer justify-content-center justify-content-md-end">
                                <Link className="nav-link active ps-0" to="#">
                                    팀소개
                                </Link>
                                <Link className="nav-link" to="#">
                                    이용약관
                                </Link>
                                <Link className="nav-link" to="#">
                                    개인정보처리방침
                                </Link>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer