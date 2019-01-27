import  { submitRequest }  from "../../client";


export const signIn = data => {
    return submitRequest(data,"token/generate-token");
}