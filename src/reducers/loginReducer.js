import { LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILED } from "../actions/types";


export default (state = {loaded:false}, action) => {
let newState={...state};
let error_msg="";
 switch (action.type) {
  case LOGIN_ACCOUNT_SUCCESS:
    newState.authToken=action.payload
    return newState
   case LOGIN_ACCOUNT_FAILED:
  default:
   return state
 }
}
