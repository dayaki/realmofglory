import Axios from 'axios';
import Config from 'react-native-config';

const {BASE_URL} = Config;

const apiService = (url, type, data) => {
  const header = {
    'Content-Type': 'application/json',
  };

  return new Promise((resolve, reject) => {
    console.log('url', `${BASE_URL}${url}`);
    Axios({
      method: type,
      url: `${BASE_URL}${url}`,
      data,
      headers: header,
    })
      .then(res => {
        resolve(res.data || res);
      })
      .catch(error => {
        console.log(error, error.config);
        // Sentry.captureException(error);
        if (error && !error.response) {
          console.log(
            'Could not connect to the server, please check your internet connection',
          );
          reject(new Error());
          //   return store.dispatch({type: CANCEL_REQUEST});
        }
        reject(error.response.data);
      });
  });
};

export default apiService;
