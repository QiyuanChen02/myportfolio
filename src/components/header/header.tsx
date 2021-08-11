import React, { useState, useRef, useEffect } from "react";
import "./header.css";

import Topbar from "./topbar";
import Landing from "./landing";
import Canvas from "./canvas";

type Props = {
    setModalActive: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ setModalActive }) => {

    //Gets the size of the div
    const [headerSize, setHeaderSize] = useState<number[]>([]);
    const [windowSize, setWindowSize] = useState<number[]>([window.innerWidth, window.innerHeight]);

    const header = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (header.current !== null) {
            setHeaderSize([header.current.offsetWidth, header.current.offsetHeight]);
        }
    }, [windowSize]);

    //Change size of canvas when resized
    useEffect(() => {
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <header ref={header} id="header">
            <Topbar setModalActive={setModalActive}/>
            <Landing setModalActive={setModalActive}/>
            <Canvas width={headerSize[0]} height={headerSize[1]} />
        </header>
    );
}

export default Header;