import React ,{Fragment }from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link} from 'react-router-dom'
import "./scss/Login.css";

const  RegistrationForm = ({ handleInputChange, inputVal, theme }) => { 

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
            placeholder="username"
            fullWidth
          />        
       </div>

       <div className="formele">
          <Input          
              startAdornment={
                <InputAdornment position="start">
                  <span><img alt="default" src={require("../../assets/email.svg")}/>              
                  </span>
                </InputAdornment>             
              }
              name="email"
              type="email"
              value={inputVal.email}
              onChange={handleInputChange}
              classes={{
                underline: theme.underline,
                input : theme.input
              }} 
              placeholder="Email"
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

      <div className="formele">
          <Input          
              startAdornment={
                <InputAdornment position="start">
                    <span><img alt="default" src={require("../../assets/lock.svg")}/>              
                    </span>
                </InputAdornment>             
              }
              placeholder="confirm Password"
              name="confirmPassword"
              type="password"
              value={inputVal.confirmPassword}
              onChange={handleInputChange}            
              fullWidth
              classes={{
                underline: theme.underline,
                input : theme.input
              }}
          />                  
      </div>

      <div className="fw-100 user_info">      
        <span className="info_text">At least one capital letter</span>
        <span className="info_text">At least one number</span>
        <span className="info_text">At least one special character(@,#,$,%,*)</span>  
      </div>

      <div style={{textAlign: 'center'}}>  
        <Button type="submit" variant="contained" color="primary" className={theme.button}>
          CREATE ACCOUNT
        </Button><Link to="register" style={{textDecoration: 'none'}}></Link>
      </div>        
   </Fragment>         
  );
};

export default RegistrationForm;

