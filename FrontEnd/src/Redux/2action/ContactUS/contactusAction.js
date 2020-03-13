/* We fire this action file that calls the reducer function and saves the data in Redux store */

import {CONTACT_US,ERROR} from "./contactus.type";
import {contactUS} from "../../1api/ContactUs/contactUsFrontAPI";
import {history} from "../../../Shared/Helpers/index";

export const ContactUS = (item) =>{

    return async dispatch =>{
        try
        {
            let contactusdata=await contactUS(item); // This contactUS data comes from Front API
        console.log(contactusdata);
        dispatch({type:CONTACT_US,payload:contactusdata.data});
        alert("Thank you! We will get back to you soon.");
        history.push("/home");
        //window.location.reload();

        }

        catch(ex){
            dispatch({type:ERROR,payload:ex.response.data});
        }
        

    }

}