import axios from 'axios';                                           

export const GET_LIST = 'GET_LIST';                      

const apiUrl = 'https://api.covid19api.com/countries';      

const receivedata = (data) => ({
    type: GET_LIST,
    list: data,
  });

export const getList = () => {                                   
  return (dispatch) => {
    return axios.get(`${apiUrl}`)                               
      .then(response => {
        console.log("response:" +response.data);
        dispatch(receivedata(response.data))  
      })
      .catch(error => { throw(error); });
  };
};