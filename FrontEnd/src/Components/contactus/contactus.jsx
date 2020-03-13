import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import {connect} from "react-redux";
import {ContactUS} from "../../Redux/2action/ContactUS/contactusAction";
import "./contactus.css";

class ContactUs extends Component {
    constructor(){
        super();
        this.state={
            fname:"",
            email:"",
            message:""
        };
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    }

    handleFormSubmit = e =>{
        e.preventDefault();
        if(this.validator.allValid()){
            let data={
                fname:this.state.fname,
                email:this.state.email,
                message:this.state.message
			};
			this.props.ContactUS(data);
		}
		else{
			this.validator.showMessages();
			this.forceUpdate();
		}
		
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        
      };


    render() {
        return (
            <div className="container contact">
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4><br/>
                <h6>If you don’t get an answer immediately, we might just be trekking through the middle of nowhere.
                    We’ll get back to you as soon as we can. That’s a promise!
                    </h6>
			</div>
		</div>
		<div className="col-md-9">
		<form onSubmit={this.handleFormSubmit}>
			<div className="contact-form">
				
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter Your Name" name="fname" 
                      value={this.state.fname}
                      onChange={this.handleInput}/>
					  {this.validator.message("First Name",this.state.fname,"required|min:3|max:50")}
				  </div>
				</div>
				
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
					value={this.state.email}
					onChange={this.handleInput}/>
					{this.validator.message("Email Id",this.state.email,"required|email")}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" name="message" value={this.state.message} onChange={this.handleInput}></textarea>
					{this.validator.message("Comment",this.state.message,"required|min:2|max:100")}
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
			</form>
		</div>
		

	</div>
</div>

        )
    }
}

const mapStateToProps=state=>{
	console.log(state);
	return state;
}
export default connect(mapStateToProps,{ContactUS})(ContactUs);