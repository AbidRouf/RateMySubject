import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import { FaAdjust } from "react-icons/fa"

const Nav = () => {

    const { data: session } = useSession()

    return (

        <header>
            <nav>
                <div className="nav__container">

                    <Link href="/">
                        <img src="/assets/RateMySubject.svg" className="logo" />
                    </Link>

                    <ul className="nav__row">

                        <li className="nav__link ">
                            <a href="/Options" className="
                            link__hover-effect
                            link__hover-effect--purple
                            ">GCSE</a>
                        </li>

                        <li className="nav__link">
                            <a href="/Options" className="
                            link__hover-effect
                            link__hover-effect--purple
                            ">A-Level</a>
                        </li>

                        <li className="nav__link">
                            <a href="/Options" className="
                            link__hover-effect
                            link__hover-effect--purple
                            ">University</a>
                        </li>

                    </ul>

                    <div className="icons">
                        <li className="icon click" /*onClick= hrefggleContrast()}*/>
                            <a href="#">
                                <FaAdjust />
                            </a>
                        </li>

                    {session ? (
                        <img
                            onClick={signOut}
                            className='click pfp'
                            src={session.user.image}
                        />
                    ) : (
                        <button
                            className='signin btn'
                            onClick={signIn}>Sign In</button>
                    )}

                    </div>


                </div>
            </nav>
        </header>
    );
}

export default Nav;
