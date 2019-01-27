import React from 'react';
import RegistrationForm from './RegistrationFormComponent'
import LoginFormComp from './LoginFormComponent'
import { withStyles } from '@material-ui/core/styles';
import lightTheme from "../../common/lightTheme"
import { withRouter } from 'react-router-dom'
import {bindActionCreators,connect} from 'react-redux';
import "./scss/Login.css";
import { login } from '../../actions/loginAction';
import compose from 'recompose/compose'




class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword : '',
      email: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let loginDetails={};
    loginDetails.userName=this.state.username;
    loginDetails.password=this.state.password;
    console.log(loginDetails);
    this.props.submitLogin(loginDetails);
  }

  getRegisterForm = () =>{
    console.log("hello")
    const {location, classes} = this.props;
    const currentRoute = location.pathname; 
    const loginForm = ( currentRoute.replace('/','') === 'register' ? <RegistrationForm handleInputChange = {this.handleInputChange} theme = {classes} inputVal = {this.state}/> 
            :<LoginFormComp handleInputChange = {this.handleInputChange}  theme = {classes} inputVal = {this.state}/>)

    return loginForm; 
  }

  render() {
    return (
      <div className='loginContainer'>  
        <div className='card'> 
          <div className ="CardHed">
             <a href="/"><img src={require("../../assets/home.JPG") } /></a>      
          </div>  
          <form onSubmit={this.handleSubmit.bind(this)} className="formContainer">        
            {this.getRegisterForm()}   
          </form>
        </div>
      </div>
    );
   }
}

function mapStateToProps (state){
  return state;
}
function mapDispatchToProps(dispatch){
  return {
    submitLogin:(data)=>dispatch(login(data))
  }
}


export default compose(
  withStyles(lightTheme),connect(mapStateToProps,mapDispatchToProps),withRouter)(LoginForm);
