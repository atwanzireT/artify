import React from "react";

export default function Header(){
    return(
        <div className="flex">
            <div className="logo">
                <h5>Artify</h5>
            </div>
            <div className="flex">
                <ul>
                    <li className="link">About</li>
                    <li className="link">Business</li>
                    <li className="link">Blog</li>
                    <li className="link">Log in</li>
                </ul>
            </div>
        </div>
    )
}