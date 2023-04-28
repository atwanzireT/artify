import React from "react";
import img from "../images/african_art.jpg";
import img2 from "../images/african_girl.jpg";

export default function Try_it() {
    return (
        <>
            <div className="bg-green-200" style={{ height: "700px" }}>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={img} alt="Background image" style={{ width: "100%", height: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="items-center m-auto h-screen flex">
                        <div>
                            <h1 className="text-green-800 text-center font-extrabold m-auto"
                                style={{ fontSize: "45px", fontWeight: "500" }}>Dream it, Create it,<br/> Exprecience it
                            </h1>
                            <h5 className="text-green-950 text-center font-bold m-auto" style={{ fontSize: "25px", fontWeight: "300" }}>
                                The Best part of Artify is to let <br /> You share Experiences and dream Experiences.
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}