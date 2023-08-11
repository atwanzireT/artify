import React, { useContext, useState } from "react";
import { BellIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid"
import img from "../images/african_girl.jpg"
import { Store } from "../../context/store";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";


export default function Topnav() {
    const navigate = useNavigate()
    const {dispatch, state} = useContext(Store)
    const {authtokens} = state
    const logout = async() => {
        await dispatch({
            type:"LOGOUTUSER"
        })
        console.log("test")
        redirect("/login")
    }
    const login = () => {
        navigate("/login")
    }
    return (
       <div className="sticky bg-white top-0">
         <div className="w-11/12 mx-auto my-2">
            <div className="float-left text-red-900 m-3 p-2" style={{ fontSize: "20px", fontWeight: "500" }}>Artify</div>
            <nav className="bg-white inline">
                <div className="text-center">
                    <input type="text" className="m-3 p-2 border-red-900 border-2 rounded-3xl w-7/12" placeholder="Am Insterested In ..." />
                    <span className=" float-right inline-flex">
                        <a href="#"><BellIcon className="w-12 h-12 text-red-900  my-3 py-2 mx-1" /></a>
                        <a href="#"><ChatBubbleLeftIcon className="w-12 h-12 text-red-900 mx-1  my-3 py-2" /></a>
                        { authtokens ? (
                        <button type="button"  onClick={logout}>Logout</button>
                        ):(
                        <button type="button"  onClick={login}>Login</button>
                        )}
                        <a href="#">
                            <img className="rounded-full h-10 w-10 my-3 mx-1 border border-1 border-red-900 border-opacity-50" src={img} alt="" />
                        </a>
                    </span>
                </div>
            </nav>
        </div>
       </div>
    )
}