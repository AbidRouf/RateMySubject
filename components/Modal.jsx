import React from 'react'
import { FaTimes } from "react-icons/fa"


const Modal = ({ toggleModal }) => {

    
    return (
        <div className="modal">


            <div className="modal__half modal__contact">


                <i className="modal__exit click" onClick={() => toggleModal()} >
                    <FaTimes />
                </i>

                <h3 className="modal__title modal__title--contact">Contact Us</h3>
                <h3 className="modal__sub-title modal__sub-title--contact">Lets have a chat!<br /> We would love to hear from you.</h3>

                <form id="contact__form" /*onSubmit={contact(event)}*/>

                    <div className="form__item">
                        <label className="form__item--label">Name</label>
                        <input className="modal__input" name="user_name" type="text" required></input>
                    </div>

                    <div className="form__item">
                        <label className="form__item--label">Email</label>
                        <input className="modal__input" name="user_email" type="email" required></input>
                    </div>

                    <div className="form__item">
                        <label className="form__item--label">Message</label>
                        <textarea className="modal__input" name="message" type="text" required></textarea>
                    </div>

                    <button id="contact__submit" className="form__submit">
                        Send it my way
                    </button>

                </form>

                <div className="modal__overlay modal__overlay--loading">
                    <i className="fas fa-spinner"></i>
                </div>

                <div className="modal__overlay modal__overlay--success">
                    Thanks for the message! Looking forward to speaking to you soon.
                </div>

            </div>


        </div>
    )
}

export default Modal;
