import Axios from 'axios';

const options = {
   baseURL: process.env.REACT_APP_BASE_URL
};

const instance = Axios.create(options);

export const getAxiosInstance = () => {
   if (! instance.defaults.headers['tokenId']) {
      const token = localStorage.getItem("tokenId");
      if (!!token) {
         instance.defaults.headers['tokenId'] = JSON.parse(token);
      }
   }

   return instance;
}