import {
    LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILED, SIGNUP_ACCOUNT_SUCCESS, SIGNUP_ACCOUNT_FAILED
} from './types'
import { signIn,createUser } from '../gateway/Authentication';

export const login = (data) => {
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


export const signUp=(data)=>{
    return (dispatch) => {
        createUser(data).then(
            function(response){
                dispatch({
                    type: SIGNUP_ACCOUNT_SUCCESS,
                    payload: response
                })
            })
            .catch(function(error){
                dispatch({
                    type: SIGNUP_ACCOUNT_FAILED,
                    payload:error
                })
            })  
        }
}