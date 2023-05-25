import axios from "axios";


export const withoutAuthAxios = () => {
  
  
  
  return axios.create({
    baseURL:process.env.LARAVEL_BASEURL
    
   
  });
};

