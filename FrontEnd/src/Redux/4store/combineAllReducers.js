import {combineReducers} from  "redux";
import {ContactUs} from "../3reducers/ContactUs/contactUsReducer";
import {forgotPassword} from "../3reducers/ForgotPassword/forgotpwdReducer";
import {userRegister} from "../3reducers/User/userReducer";

const reducers=combineReducers({contact:ContactUs,forgotpassword:forgotPassword,userrgi:userRegister});

export default reducers;


/*The combineReducers helper function turns an object whose values are different reducing functions
into a single reducing function you can pass to createStore.

 */