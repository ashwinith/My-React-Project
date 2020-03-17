import {FORGOT_PASSWORD} from "../../2action/ForgotPassword/forgotpassword.type";

export const forgotPassword=(state={},action)=>{

    switch(action.type){
        case FORGOT_PASSWORD:
            return {...state,item:action.payload};

            default:
                return state;
    }

}