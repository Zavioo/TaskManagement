import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";


// register api called by auth component when user clicks register button
export const registerAPI=async(reqBody)=>{ //Exporting the Function
      // making post request to server
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
} 




