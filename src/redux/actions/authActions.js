import {LOGIN,LOGOUT} from "../../utils/constant.js"
import { INCREMENT,DECREMENT } from "../../utils/constant.js"


export const loginAction=(value)=>{
    return (dispatchLoginAction)=>{
        dispatchLoginAction({
            type:LOGIN,
            payload:value
        })
    }
}

export const logoutAction=(value)=>{
    return (dispatchLogoutAction)=>{
        dispatchLogoutAction({
            type:LOGOUT,
            payload:value
        })
    }
}


export const incNumber = ()=>{
    return{
        type:INCREMENT,

    }
}

export const decNumber = ()=>{
    return{
        type:DECREMENT
    }
}