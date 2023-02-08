import AppConsts from './../lib/appconst';
import axios, { AxiosHeaders } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const qs = require('qs');

const http = axios.create({
  baseURL: AppConsts.appBaseUrl,
  withCredentials: false,
  timeout: 160000,
  paramsSerializer: {
    encode: (params) => qs.stringify(params)
  },
});

http.interceptors.request.use(
  function (config) {
    AsyncStorage.getItem('aspboilerplate:token').then((x: any) => {
      console.log("httpservice18" + x)
      if (x) {
        console.log("httpservice21" + x);
        (config.headers as AxiosHeaders).set('Authorization', 'Bearer ' + x);
      }
    });
    AsyncStorage.getItem('aspboilerplate:tenant').then((x: any) => {
      console.log("httpservice26" + x)
      if (x) {
        console.log("httpservice27" + x);
        (config.headers as AxiosHeaders).set('AspBoilerplate.TenantId', x);
      }
    });

    // config.headers.common['.AspNetCore.Culture'] = datamind.utils.getCookieValue('Abp.Localization.CultureName');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// http.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details)
//       // {
//       //   Modal.error({
//       //     title: error.response.data.error.message,
//       //     content: error.response.data.error.details,
//       //   });
//       // } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
//       //   Modal.error({
//       //     title: L('LoginFailed'),
//       //     content: error.response.data.error.message,
//       //   });
//       // } else if (!error.response) {
//       //   Modal.error({ content: L('UnknownError') });
//       // }

//       // setTimeout(() => { }, 1000);

//       return Promise.reject(error);
//   }
// );

export default http;
