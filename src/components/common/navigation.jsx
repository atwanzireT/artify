import React from "react";

export default function Navigation() {
    return (
        <div className="w-11/12 mx-auto my-2">
            <div className="float-left text-red-900" style={{fontSize:"20px", fontWeight:"500"}}>Artify</div>
            <nav className="bg-white inline">
                <div className="text-center">
                    <a href="#"><li className="link m-3 p-1">About</li></a>
                    <a href="#"><li className="link m-3 p-1">Business</li></a>
                    <a href="#"><li className="link m-3 p-1">Blog</li></a>
                    <a href="#"><li className="link m-3 p-2 bg-red-900 rounded-xl text-white float-right">Log in</li></a>
                </div>
            </nav>
        </div>
    )
}