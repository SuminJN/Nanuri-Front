import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";

import {RecoilRoot} from "recoil";
import AppRoutes from "./AppRoutes";

function App() {

    return (
        <>
            <RecoilRoot>
                <AppRoutes />
            </RecoilRoot>
        </>
    );
}

export default App;
