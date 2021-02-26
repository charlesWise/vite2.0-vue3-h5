import request from '../utils/request';

request({ url: '/profile ', method: 'get' }).then((res) => {
  console.log(res);
});
