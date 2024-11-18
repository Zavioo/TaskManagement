// Importing Axios
import axios from 'axios';

//Defining the commonAPI Function
const commonAPI = async(httpMethod, url, reqBody, reqHeader) => {
    
   // Configuring the Request
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }

    //Making the Request
    return await axios(reqConfig).then(res => {
        return res
    }).catch(err => {
        return err
    })

}

//Exporting commonAPI Function

export default commonAPI;   