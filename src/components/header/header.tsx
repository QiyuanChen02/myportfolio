import React from "react";
import "./header.css";

import Topbar from "./topbar";
import Landing from "./landing";
import Canvas from "./canvas";

const Header: React.FC = () => {
    return (
        <header>
            <Topbar />
            <Landing />
            <Canvas />
        </header>
    );
}

export default Header;