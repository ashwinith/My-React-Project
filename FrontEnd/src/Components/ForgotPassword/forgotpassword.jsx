import React, { Component } from "react";
import "./forgotpassword.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ForgotPasswordAction} from "../../Redux/2action/ForgotPassword/forgotPwdAction";
import SimpleReactValidator from "simple-react-validator";

class ForgotPassword extends Component{

	constructor(props){
        super(props);
        this.state={
            email:""
         };
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
	}
	
	handleFormSubmit = e =>{
        e.preventDefault();
        if(this.validator.allValid()){
            let data={
                email:this.state.email
               
			};
			this.props.ForgotPasswordAction(data);
		}
		else{
			this.validator.showMessages();
			this.forceUpdate();
		}
		
    }

    handleInput = e => {
        this.setState({
			[e.target.name]: e.target.value
		});
        
      };


    render(){
        return(

            <div className="container" style={{marginTop:"120px",marginLeft:"400px"}}>
    
        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
    		<form role="form" className="sign_up_form" onSubmit={this.handleFormSubmit}>
    			<h2 className="sign_up_title">Reset password</h2>
    			<p>Please enter your E-mail address and we will send you a link to
                     reset your password by email immediately.</p>
    			<div className="form-group">
					<input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email address" tabindex="4"
					value={this.state.email}
					onChange={this.handleInput}/>
					{this.validator.message("Email Id",this.state.email,"required|email")}
    			</div>
    			<div className="row">
    				<div className="col-xs-12 col-md-12"><Link to="/home" onClick={this.handleFormSubmit} className="btn btn-success btn-block btn-lg">Reset</Link></div>
    			</div>
    		</form>
    	</div>
    
</div>

        )
    };
}

const mapStateToProps=state=>{
	console.log(state);
	return state;
}
export default connect(mapStateToProps,{ForgotPasswordAction})(ForgotPassword);
