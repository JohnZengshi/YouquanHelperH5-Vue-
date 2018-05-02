'use strict';
import axios from 'axios';
let Request = async (method, param, url) => {
  let res;
  if (method === 'POST') {
    res = await axios.post(url, param)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res = await axios.get(url, {
        params: param
      })
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return res.data;
};
export default Request;
