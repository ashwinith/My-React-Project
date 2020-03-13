/* Here in Reducer we change the state using the Redux, the UI will change,
and we get our first post at the front end. */

import {CONTACT_US} from "../../2action/ContactUS/contactus.type";

export const ContactUs = (state={},action)=>{

    switch(action.type){

        case CONTACT_US :
            
            return {...state,item:action.payload};

            default :
            return state;
    }

}