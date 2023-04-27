import React from "react";
import Navigation from "../common/navigation";
import Header from "./header";
import How_it_Works from "./how_it_works";
import Save_your_insterest from "./save_your_interests";

export default function Home(){
    return(
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                <Header/>
            </div>
            <div>
                <How_it_Works/>
            </div>
            <div>
                <Save_your_insterest/>
            </div>
        </div>
    )
}