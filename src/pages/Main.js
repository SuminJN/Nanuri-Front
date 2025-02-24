// import 'bootstrap/dist/css/bootstrap.min.css';

import LoginBtn from "../components/login/LoginBtn";
import {Link} from "react-router-dom";
import NavbarDefault from "../components/NavbarDefault";

const Main = () => {
    return (
        <div>
            <NavbarDefault/>

            <div className="py-5 text-center">
                <h2>메인 페이지</h2>
            </div>
        </div>
    );
}

export default Main;