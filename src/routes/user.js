import { Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import LoginIng from "../services/LoginIng";
import MySharing from "../pages/MySharing";
import Chat from "../pages/Chat";
import Ranking from "../pages/Ranking";

function User() {
    return (
        <>
            <Routes>
                <Route path={process.env.REACT_APP_DEPLOY_URL} element={<Main />} />
                <Route path={process.env.REACT_APP_DEPLOY_URL + "mysharing"} element={<MySharing />} />
                <Route path={process.env.REACT_APP_DEPLOY_URL + "chat"} element={<Chat />} />
                <Route path={process.env.REACT_APP_DEPLOY_URL + "ranking"} element={<Ranking />} />
                <Route path={process.env.REACT_APP_DEPLOY_URL + "nanuri/callback"} element={<LoginIng />} />
            </Routes>
        </>
    );
}

export default User;
