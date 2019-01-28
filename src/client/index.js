import axios from 'axios';

const endPoint="http://agam-doors.ap-south-1.elasticbeanstalk.com/doors-api/";

export const submitRequest = (data,url)=>{
    return axios({
        method:'post',
        url:endPoint+url,
        crossdomain:false,
        data:data,
        config:{
            headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*',  
                'Access-Control-Allow-Credentials': 'true',
                "Cache-Control": "no-cache"}
        }
    });
}

export const get=(url)=>{
    return axios({
        method:'post',
        url:url,
        config:{
            headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'http://localhost:3006','Access-Control-Allow-Credentials':'true'}
        }
    });
}

export const updateRequest=(data,url)=>{
    return axios({
        method:'put',
        url:url,
        data:data,
        config:{
            headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'http://localhost:3006','Access-Control-Allow-Credentials':'true'}
        }
    });
}