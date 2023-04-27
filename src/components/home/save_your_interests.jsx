import React from "react";
import img1 from "../images/meals.jpg";
import img2 from "../images/pottery.jpg";
import img3 from "../images/wines.jpg";
import img4 from "../images/camera.jpg";



export default function Save_your_insterest() {
    return (
        <>
            <div className="bg-blue-200" style={{ height: "700px" }}>
                <div className="grid grid-cols-2 gap-2 m-auto items-center">
                    <div className="items-center h-screen flex">
                        <div>
                            <h1 className="text-gray-800 text-center font-extrabold m-auto"
                                style={{ fontSize: "45px", fontWeight: "300" }}>Easily Save Your Insterest.
                            </h1>
                            <h5 className="text-gray-950 text-center font-bold m-auto" style={{ fontSize: "25px", fontWeight: "300" }}>
                                Collect your Favourites so as <br /> You can easily get back to them anytime.
                            </h5>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mx-2">
                        <figure>
                            <img src={img1} className="rounded-2xl" alt="" srcset="" />
                            <figcaption className="text-center font-semibold text-white" style={{marginTop:"-100px", fontSize:"30px"}}>Food Dishes</figcaption>
                        </figure>
                        <figure style={{marginTop:"80px"}}>
                            <img src={img2} alt="" className="rounded-2xl" srcset="" />
                            <figcaption className="text-center font-semibold text-white" style={{marginTop:"-100px", fontSize:"30px"}}>Pottery</figcaption>
                        </figure>
                        <figure>
                            <img src={img3} alt="" className="rounded-2xl" srcset="" />
                            <figcaption className="text-center font-semibold text-white" style={{marginTop:"-100px", fontSize:"30px"}}>Wines</figcaption>
                        </figure>
                        <figure figure style={{marginTop:"80px"}}>
                            <img src={img4} alt="" className="rounded-2xl" srcset="" />
                            <figcaption className="text-center font-semibold text-white" style={{marginTop:"-100px", fontSize:"30px"}}>Photography</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}