import  { submitRequest }  from "../../client";


export const signIn = data => {
    return submitRequest(data,"token/generate-token");
}

export const createUser = data => {
    return submitRequest(data ,"users/signup");
}