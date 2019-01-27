import {
    LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILED
} from './types'
import { signIn } from '../gateway/Authentication';

export const login = (data) => {
    console.log(data,"inside action");
    return (dispatch) => {
            signIn(data).then(
                function(response){
                    dispatch({
                        type: LOGIN_ACCOUNT_SUCCESS,
                        payload: response
                    })
                })
                .catch(function(error){
                    dispatch({
                        type: LOGIN_ACCOUNT_FAILED,
                        payload:error
                    })
                })  
    }
}