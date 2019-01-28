import { LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILED, SIGNUP_ACCOUNT_SUCCESS, SIGNUP_ACCOUNT_FAILED } from "../actions/types";


export default (state = {loaded:false}, action) => {
let newState={...state};
let error_msg="";
 switch (action.type) {
  case LOGIN_ACCOUNT_SUCCESS:
        newState.authToken=action.payload.data && action.payload.data.result ? action.payload.data.result:"";
        newState.loaded=true;
        return newState;
   case LOGIN_ACCOUNT_FAILED: 
        newState.errors="Invalid Username or password"

   case SIGNUP_ACCOUNT_SUCCESS:
        newState.success="User Created Successfully"
        return newState
    case SIGNUP_ACCOUNT_FAILED: 
        newState.errors="Sign up failed"

  default:
   return state
 }
}
