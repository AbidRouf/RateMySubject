import React from 'react';
import Option from "../components/classes/Option";
import Link from "next/link";


const Options = () => {
    return (
        <section id="Options">
            <div className="container">
                <div className="row">

                    <h2 className="option__title">
                        Choose from a range of <span className="purple">Options</span>
                    </h2>

                    <div className="options__wrapper">
                        <div className="option">
                            <h3 className="option__subtitle">GCSE</h3>

                            <li className="option__list">
                                <Link href="/ComputerScience" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Computer Science</Link>
                            </li>
                            <li className="option__list">
                                <Link href="/Business-Studies" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Business-Studies</Link>
                            </li>
                            
                        </div>

                        <div className="option">
                            <h3 className="option__subtitle">A-Level</h3>

                            <li className="option__list">
                                <Link href="/" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Maths</Link>
                            </li>
                            <li className="option__list">
                                <Link href="/" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">English</Link>
                            </li>

                        </div>

                        <div className="option">
                            <h3 className="option__subtitle">University</h3>

                            <li className="option__list">
                                <Link href="/" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Computer Science with Business</Link>
                            </li>
                            <li className="option__list">
                                <Link href="/" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Mechanical Engineering</Link>
                            </li>

                        </div>

                    </div>

                </div>
            </div>
        </section >
    );
};

export default Options;
