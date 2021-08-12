import React, { Fragment } from "react";
import "./contact.css";

type Props = {
    modalActive: boolean;
    setModalActive: (value: boolean) => void;
}

const Contact: React.FC<Props> = ({ modalActive, setModalActive }) => {

    return (
        <Fragment>
            <section className={`contact ${modalActive ? "active" : ""}`} id="contact">
                <button className="close-modal" onClick={() => setModalActive(false)}>&times;</button>
                <div className="form-header">
                    <h3>Let's Talk</h3>
                </div>
                <form action="https://formsubmit.co/d15cb9f833036aa19e3200df1c447db4" method="POST">
                    <div className="form-name">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="form-email">
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-message">
                        <label htmlFor="message">Message *</label>
                        <textarea name="message" id="message" required />
                    </div>
                    <div className="button-wrapper">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </section>
            <div id="overlay" className={`${modalActive ? "active" : ""}`}></div>
        </Fragment>
    );
}

export default Contact;