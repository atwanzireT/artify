import React from "react";
import Navigation from "../common/navigation";
import Header from "./header";

export default function Home(){
    return(
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                <Header/>
            </div>
        </div>
    )
}