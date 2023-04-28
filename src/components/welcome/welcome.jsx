import React from "react";
import Navigation from "../common/navigation";
import Header from "./header";
import How_it_Works from "./how_it_works";
import Save_your_insterest from "./save_your_interests";
import Try_it from "./try_it";
import SignUp from "./signup";

export default function Welcome(){
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
            <div>
                <Try_it/>
            </div>
            <div>
                <SignUp/>
            </div>
        </div>
    )
}