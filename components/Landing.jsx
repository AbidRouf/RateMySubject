import React from 'react'
import { FaEnvelope } from "react-icons/fa"
import Link from "next/link";
// import { useRecoilState } from 'recoil';
// import { modalState } from '../atoms/modalAtom';

function Landing({ toggleModal }) {

    return (
        <section id="Landing">

            <h1 className="title">A better way to choose your
                <span className="purple"> course</span></h1>

            <form className="input__wrapper">

                <input className="search__course" type="text"
                    placeholder="Search for your course to get started"
                    autoComplete="off" required />

                {/* <i className="btn__search" >
                            <FontAwesomeIcon icon="search" />
                    </i> */}

            </form>

            <div className="btn__location">
                <Link href="/Options" >
                    <button className='browse__all'>Browse All</button>
                </Link>
            </div>


            <a href="#">
                <button className="mail__btn click" onClick={() => toggleModal()}>
                    <FaEnvelope />
                </button>
            </a>

            <a href="#testimonials" className="scroll">
                <div className="scroll__icon click"></div>
            </a>


        </section>

    )
}

export default Landing;
