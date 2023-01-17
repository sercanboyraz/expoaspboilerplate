import AppConsts from './../lib/appconst';
// import { L } from '../lib/datamindUtility';
// import { Modal } from 'antd';
import axios from 'axios';

const qs = require('qs');

declare var datamind: any;

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 160000,
  // paramsSerializer: function(params) {
  //   return qs.stringify(params, {
  //     encode: false,
  //   });
  // },
});

http.interceptors.request.use(
  // function(config) {
  //   if (!!datamind.auth.getToken()) {
  //     config.headers.common['Authorization'] = 'Bearer ' + datamind.auth.getToken();
  //   }

  //   config.headers.common['.AspNetCore.Culture'] = datamind.utils.getCookieValue('Abp.Localization.CultureName');
  //   config.headers.common['Datamind.TenantId'] = datamind.multiTenancy.getTenantIdCookie();

  //   return config;
  // },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  // error => {
  //   if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
  //     Modal.error({
  //       title: error.response.data.error.message,
  //       content: error.response.data.error.details,
  //     });
  //   } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
  //     Modal.error({
  //       title: L('LoginFailed'),
  //       content: error.response.data.error.message,
  //     });
  //   } else if (!error.response) {
  //     Modal.error({ content: L('UnknownError') });
  //   }

  //   setTimeout(() => {}, 1000);

  //   return Promise.reject(error);
  // }
);

export default http;
