import {useRecoilValue} from "recoil";
import {tokenState} from "../recoil/atoms/tokenState";
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoute() {
    const token = useRecoilValue(tokenState);
    const tokenExp = token ? token.exp : null;

    const isActive = () => {
        if(tokenExp >= (new Date().getTime() + 1) / 1000) {
            return true;
        } else {
            alert("로그인 후 이용 가능합니다.");
            return false;
        }
    };

    return isActive() ? <Outlet /> : <Navigate to={"/"} />;
}

export default PrivateRoute;