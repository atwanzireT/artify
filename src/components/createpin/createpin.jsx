import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Topnav from "../common/topnav";
import img1 from "../images/abstract.jpg";
import img2 from "../images/african-woman.jpg";
import img3 from "../images/brushes.jpg";
import img4 from "../images/fashion.jpg";

export default function CreatePin() {
    return (
        <>
            <Topnav />
            <div className="flex">
                <div className="m-auto">
                    <div className=" flex h-full items-center m-auto text-center">
                        <div>
                            <img className="rounded-3xl mx-2 my-2  border-white border-solid border-2" style={{ marginTop: "130px", width: "120px" }} src={img1} alt="" /></div>
                        <div>
                            <img className="rounded-3xl mx-2 my-2 border-white border-solid border-2" style={{ marginTop: "-10px", width: "180px", marginLeft: "-30px" }} src={img4} alt="" />
                            <img className="rounded-3xl mx-2 my-2 border-white border-solid border-2" style={{ marginTop: "-80px", width: "200px", marginLeft: "-80px" }} src={img2} alt="" />
                        </div>
                        <div>
                            <img className="rounded-3xl mx-2 my-2  border-white border-solid border-2" style={{ marginLeft: "-100px", width: "300px" }} src={img3} alt="" />
                        </div>
                    </div>
                    <div className="m-auto text-center">
                        <h1 className="text-gray-800 text-center m-auto" style={{ fontSize: "30px", fontWeight: "300" }}>
                            Create Your Album Pins
                        </h1>
                        <div className="mt-1">
                            <button className="bg-red-900 text-white rounded-2xl m-auto p-4 hover:opacity-80">Create New Pin</button>
                        </div>
                        <div className="mt-1">
                            <button className="bg-gray-900 text-white rounded-2xl m-auto p-4 hover:opacity-80">Create New Idea Pin</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}