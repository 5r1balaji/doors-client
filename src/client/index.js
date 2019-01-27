import axios from 'axios';

const endPoint="http://agam-doors.ap-south-1.elasticbeanstalk.com/doors-api/";

export const submitRequest = (data,url)=>{
    return axios({
        method:'post',
        url:endPoint+url,
        data:data,
        config:{
            headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'http://agam-doors.ap-south-1.elasticbeanstalk.com/doors-api/','Access-Control-Allow-Credentials':'true'}
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