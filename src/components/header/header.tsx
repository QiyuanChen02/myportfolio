import React, { useState, useRef, useEffect } from "react";
import "./header.css";

import Topbar from "./topbar";
import Landing from "./landing";
import Canvas from "./canvas";

import { linkTo } from "../../usefulFunctions";

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

            {/* Pointing chevron */}
            <div data-location="#projects" onClick={linkTo} className="chevron">
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </div>
        </header>
    );
}

export default Header;