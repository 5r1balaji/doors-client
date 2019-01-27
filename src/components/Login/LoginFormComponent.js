import React ,{Fragment }from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link} from 'react-router-dom'
import "./scss/Login.css";

const  LoginFormComp = ({ handleSubmit,handleInputChange, inputVal, theme }) => { 

  return ( 
     <Fragment>
        <div className="formele">
            <Input          
                startAdornment={
                    <InputAdornment position="start">
                        <span><img alt="default" src={require("../../assets/user.svg")}/>              
                        </span>
                    </InputAdornment>             
                }
                name="username"
                type="text"
                value={inputVal.username}
                onChange={handleInputChange}
                classes={{
                    underline: theme.underline,
                    input : theme.input
                }} 
                placeholder="Username | Email ID"
                fullWidth
            />        
        </div> 

        <div className="formele">
            <Input          
                startAdornment={
                    <InputAdornment position="start">
                        <span><img alt="default" src={require("../../assets/lock.svg")}/>              
                        </span>
                    </InputAdornment>             
                }
                name="password"
                type="password"
                value={inputVal.password}
                onChange={handleInputChange}
                classes={{
                underline: theme.underline,
                input : theme.input
                }} 
                placeholder="Password"
                fullWidth
             />          
        </div> 

        <div style={{width: '100%', textAlign: 'center',paddingTop:'20px',paddingBottom: '20px'}}>  
                <div>
                    <a href="#" className="login-button" ><button type="submit">LOGIN</button> </a>
                </div>
        </div>

        <div className="fw-100 user_info">      
            <span className="info_text_login">Recover Password</span>
            <span className="info_text_login">Remember Me</span>
        </div>
        
        <div style={{width: '100%', textAlign: 'center'}}>  
            <Link to="register" style={{textDecoration: 'none'}}>
                <Button type="submit" variant="contained" color="primary" className={theme.loginAcBut}>
                    CREATE ACCOUNT
                </Button>
            </Link>
        </div>
    </Fragment>         
  );
};


export default LoginFormComp;

