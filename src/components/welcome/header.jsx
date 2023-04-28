import { useState } from "react";
import React from "react";
import img1 from "../images/abstract.jpg";
import img2 from "../images/african-woman.jpg";
import img3 from "../images/brushes.jpg";
import img4 from "../images/photograph.jpg";


export default function Header() {
    const [text, setText] = useState(0);
    const options = ["Inspiration", "Dream"]
    return (
        <>
            <div>
                <div className="mt-8">
                    <h1 className="text-gray-800 text-center m-auto"
                        style={{ fontSize: "50px", fontWeight: "300" }}>Get Your Next</h1>
                    <h1 className="text-red-900 text-center" style={{ fontSize: "50px", fontWeight: "300" }}>Inspiration & Dream</h1>
                </div>
                <div className="w-11/12 grid grid-cols-4 gap-8 m-auto">
                    <div ><img className="rounded-3xl h-5/6" src={img1} alt="" style={{ marginTop: "-30px" }} /></div>
                    <div ><img className="rounded-3xl mt-4 h-5/6" src={img2} alt="" /></div>
                    <div ><img className="rounded-3xl mt-4 h-5/6" src={img3} alt="" /></div>
                    <div ><img className="rounded-3xl h-5/6" style={{ marginTop: "-30px" }} src={img4} alt="" /></div>
                </div>
                <div className="text-center" style={{ marginTop: "-20px" }}>
                    <a href="#" className="text-white bg-red-900 p-2 rounded-md">How it Works</a>
                </div>
            </div>
        </>
    )
}