import React from 'react'
import { Link } from "react-router-dom";

const links = ({ links }) => {
    return (
        <div className="option">

            <li className="option__title">
            <Link to="/" className="
                link__hover-effect
                link__hover-effect--purple
                ">{links}</Link>
            </li>
            

        </div>

    )

}


export default links

