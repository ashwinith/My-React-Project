import {FORGOT_PASSWORD,ERROR} from "./forgotpassword.type";
import {forgotPassword} from "../../1api/ForgotPassword/forgotpasswordFrontAPI";
import {history} from "../../../Shared/Helpers/index";

export const ForgotPasswordAction=(item)=>{
   
    return async (dispatch) =>
    {
        try
    {
        console.log("Try block in action.",item);
        let forgotpwddata=await forgotPassword(item);
        console.log(forgotpwddata,"Try block");
        dispatch({type : FORGOT_PASSWORD , payload : forgotpwddata.data }); // Here we are sending data to reducer
        alert("Please check your inbox to reset your password");
        history.push("/home");
    }
    catch (ex) {
        dispatch({ type: ERROR, payload: ex.response.data })
    }

    }
    
};
