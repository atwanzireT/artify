import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

export const Store = createContext()

const initialState = {
    authtokens : Cookies.get("authtokens")?JSON.parse(Cookies.get("authtokens")):null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "USERLOGIN":{
            const authtokens = action.payload
            console.log("authtokens ",authtokens)
            Cookies.set("authtokens", JSON.stringify(authtokens))
            return {...state, authtokens}
        }
        case "LOGOUTUSER":{
            Cookies.remove("authtokens")
        }
        default:
            return state
    }
}

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {state, dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}