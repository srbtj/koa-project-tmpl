const axios = require('axios');
const qs = require('qs');
const URLS = require('./urls');
console.log(URLS);
// 设置请求超时时长
axios.defaults.timeout = 50000;
// 表单提交 post 方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(config => {
  if (config.method.toLowerCase() === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(err);
});

function fetch (url, params) {
  return new Promise((resolve, reject) => {
    function handleResponse (resolve, response) {
      const _body = response.data || response;
      resolve(_body);
    }
    if (!params) {
      axios.get(url)
        .then(response => {
          handleResponse(resolve, response);
        }, err => {
          reject(err);
        }).catch((error) => {
          reject(error);
      })
    } else {
      axios.post(url, params)
        .then(response => {
          handleResponse(resolve, response);
        }, err => {
          reject(err);
        }).catch((error) => {
          reject(error);
      });
    }
  });
};

module.exports = {
  GetAllNews (pageNo, pageSize) {
    const urls = `${URLS.GETALLNEWS}?pageNo=${pageNo}&pageSize=${pageSize}`;
    console.log(urls);
    return fetch(urls);
  }
}
