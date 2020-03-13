/* We have created this file coz:
1. At the start of the application, we fire an action that fetches all posts from the MongoDB database, if the 
    data is not there then we display no posts.
2. When we add a new post i.e. when we recieve a data from UI then first it fires an action that sends a POST request
    to node.js server and  express saves the data in the database and returns that data in JSON format.

*/

import axios from "axios";



const ContactUs_ENDPOINT="http://localhost:4800/api/contactus";

const config={
    headers:{
        "Content-Type":"application/json" /* Content-Type in the header of a HTTP request specifies to the server 
                                            what data it should expect. If a server allows and accepts multiple 
                                            types of content it can use this field know how to interpret the body
                                            of the request. Here in this case would inform the server to expect JSON in the body.*/
        
    }
};

export const contactUS = (data) => {
    console.log(JSON.stringify(data));

 return axios.post(ContactUs_ENDPOINT,JSON.stringify(data),config);
}