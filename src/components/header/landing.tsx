import React from "react";
import "./header.css";

type Props = {
    setModalActive: (value: boolean) => void;
}

const TopBar: React.FC<Props> = ({ setModalActive }) => {

    return (
        <div className="landing">
            <h1>Qiyuan Chen</h1>
            <h2>Future Web Dev</h2>
            <button onClick={() => setModalActive(true)}>Let's Talk!</button>
        </div>
    )
}

export default TopBar;