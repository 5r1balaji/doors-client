import React from 'react';
import RegistrationForm from './RegistrationFormComponent'
import LoginFormComp from './LoginFormComponent'
import { withStyles } from '@material-ui/core/styles';
import lightTheme from "../../common/lightTheme"
import { withRouter } from 'react-router-dom'
import {bindActionCreators,connect} from 'react-redux';
import "./scss/Login.css";
import { login ,signUp} from '../../actions/loginAction';
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

  componentWillReceiveProps(nextProps){
    this.setState({success:nextProps.success});
  }
  componentDidUpdate(){
    if(this.props.loaded)
      this.props.history.push("/home");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleRegisterSubmit=(event)=>{
    event.preventDefault();
    let signUp={};
    signUp.username=this.state.username;
    signUp.password=this.state.password;
    signUp.email=this.state.email;
    this.props.userSignup(signUp);
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let loginDetails={};
    loginDetails.username=this.state.username;
    loginDetails.password=this.state.password;
    this.props.submitLogin(loginDetails);
  }

  getRegisterForm = () =>{
   
    const {location, classes} = this.props;
    const currentRoute = location.pathname; 
    const loginForm = ( currentRoute.replace('/','') === 'register' ? <RegistrationForm success={this.state.success} handleInputChange = {this.handleInputChange} handleSubmit={this.handleRegisterSubmit} theme = {classes} inputVal = {this.state}/> 
            :<LoginFormComp handleInputChange = {this.handleInputChange}  handleSubmit={this.handleSubmit} theme = {classes} inputVal = {this.state}/>)
    return loginForm; 
  }

  render() {
    return (
      <div className='loginContainer'>  
        <div className='cardwindow'> 
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

function mapStateToProps(state){
  return {
    errors:state.login.error,
    success:state.login.success,
    loaded:state.login.loaded
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitLogin:(data)=>dispatch(login(data)),
    userSignup:(data)=>dispatch(signUp(data))
  }
}


export default compose(
  withStyles(lightTheme),connect(mapStateToProps,mapDispatchToProps),withRouter)(LoginForm);
