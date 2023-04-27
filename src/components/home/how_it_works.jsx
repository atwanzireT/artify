import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import img1 from "../images/abstract.jpg";
import img2 from "../images/african-woman.jpg";
import img3 from "../images/brushes.jpg";
import img4 from "../images/fashion.jpg";

export default function How_it_Works() {
    return (
        <>
            <div className="mt-5">
                <div className="m-auto rounded-t-xl bg-red-200" style={{ height: "700px" }}>
                    <div className="grid grid-cols-2 gap-3">
                        {/* <input type="text" placeholder="search" /> */}
                        <div className="m-auto">
                            <div style={{ marginTop: "20px" }}>
                                <div className="grid grid-cols-3 bg-white rounded-2xl m-auto w-2/6">
                                    <div><MagnifyingGlassIcon className="h-16 w-16 my-2 ms-1 text-red-900 col-span-1" /> </div>
                                    <div className="col-span-2 my-2 me-1 text-3xl font-bold">african Art</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-0" style={{ marginTop: "30px" }}>
                                <div><img className="rounded-3xl mx-2 my-2  border-red-200 border-solid border-2" style={{ marginTop: "130px", width:"200px" }} src={img1} alt="" /></div>
                                <div>
                                    <img className="rounded-3xl mx-2 my-2 border-red-200 border-solid border-2" style={{ marginTop: "-10px", marginLeft: "-30px" }} src={img4} alt="" />
                                    <img className="rounded-3xl mx-2 my-2 border-red-200 border-solid border-2" style={{ marginTop: "-80px", marginLeft: "-80px" }} src={img2} alt="" />
                                </div>
                                <div><img className="rounded-3xl mx-2 my-2  border-red-300 border-solid border-2" style={{ marginLeft: "-100px"}} src={img3} alt="" /></div>
                            </div>
                        </div>
                        <div className="m-auto mx-2">
                            <h1 className="text-gray-800 text-center font-extrabold m-auto"
                                style={{ fontSize: "45px", fontWeight: "300" }}>Easily Search For Your Insterest.
                            </h1>
                            <h5 className="text-gray-950 text-center font-bold m-auto" style={{ fontSize: "25px", fontWeight: "300" }}>
                                Where do you need as your next Experience? Think of Something you are into.
                                It can be a Meal, Journey, Fashion, Art or so much more
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}