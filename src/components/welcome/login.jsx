import React, { useContext, useEffect } from "react";
import axios from "../lib/axios"
import { Store } from "../../context/store";
import { redirect, useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate()
    const {dispatch, state} = useContext(Store)
    const {authtokens} = state
    useEffect(()=>{
        if (authtokens) {
            navigate("/home")
        }
    })
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(e.target.email.value)
        const formdata = {
            "email" : e.target.email.value,
            "password": e.target.password.value,
        }

        try {
            const response = await axios.post("api/user/token/", formdata)
            if (response.status === 200){
                // console.log(response);
                dispatch({
                    type:"USERLOGIN",
                    payload:response.data
                })
                navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="m-auto rounded-t-xl bg-amber-200" id="signup" style={{ height: "700px" }}>
                <div className="grid grid-cols-2 ">
                    <div className="flex h-screen items-center m-auto ">
                        <div>
                            <h1 className="text-yellow-800 text-center font-extrabold m-auto"
                                style={{ fontSize: "45px", fontWeight: "500" }}>Sign Up <br /> And <br /> Share Experiences.
                            </h1>
                        </div>
                    </div>
                    <div className="flex h-screen items-center m-auto w-8/12" >
                        <div className="bg-white rounded-2xl">
                            <div className="my-4 mx-8">
                                <h1 className="text-yellow-800 text-center font-extrabold m-auto"
                                    style={{ fontSize: "25px", fontWeight: "500" }}>Welcome To Artify</h1>
                                <p className="text-yellow-800 text-center font-bold text-opacity-50">Share Your Ideas</p>
                            </div>
                            <div className="m-8">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="m-auto text-center">
                                        <div className="my-2">
                                            <div>
                                                <label className="text-yellow-800 text-center text-opacity-70 italic" htmlFor="emailfield">Email</label>
                                            </div>
                                            <div>
                                                <input id="emailfield" name="email" placeholder="Email" type="text" className="border border-yellow-900 border-opacity-50 border-solid rounded-2xl p-2 w-full" />
                                            </div>
                                        </div>
                                        <div className="my-2">
                                            <div>
                                                <label className="text-yellow-800 text-center text-opacity-70 italic" htmlFor="passwordfield">Password</label>
                                            </div>
                                            <div>
                                                <input id="passwordfield" name="password" placeholder="Create Password" type="password" className="border border-yellow-900 border-opacity-50 border-solid rounded-2xl p-2 w-full" />
                                            </div>
                                        </div>
                                        {/* <div className="my-2">
                                            <div>
                                                <label className="text-yellow-800 text-center text-opacity-70 italic" htmlFor="datefield">Date of Birth</label>
                                            </div>
                                            <div>
                                                <input id="datefield" name="dob" type="date" className="border border-yellow-900 border-opacity-50 border-solid rounded-2xl p-2 w-full" />
                                            </div>
                                        </div> */}
                                        <div className="my-2">
                                            <button type="submit" className="bg-yellow-500 text-white p-2 rounded-2xl w-full">Continue</button>
                                        </div>
                                        <div className="my-2 w-8/12 m-auto">
                                            <p className="opacity-50 text-sm font-bold">By continuing,
                                                You agree to our terms of Service and Acknowledge
                                                that you have read our Privacy Policy. </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}