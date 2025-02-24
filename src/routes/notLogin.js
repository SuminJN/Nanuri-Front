import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "../pages/Main";
import LoginIng from "../components/login/LoginIng";

function NotLogin() {

    return (
        <>
            <Routes>
                <Route path={process.env.REACT_APP_DEPLOY_URL} element={<Main />} />
                <Route path={process.env.REACT_APP_DEPLOY_URL + "nanuri/callback"} element={<LoginIng />} />
            </Routes>
        </>
    );
}

export default NotLogin;
