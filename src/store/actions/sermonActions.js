import {LOADING, CANCEL_REQUEST, SAVE_SERMONS} from '../types';
import apiService from '../../utils/apiService';

export const fetchSermons = () => dispatch => {
  dispatch({type: LOADING});
  apiService('sermons/1', 'GET')
    .then(({data}) => {
      console.log('sermons', data);
      dispatch({type: SAVE_SERMONS, payload: data});
    })
    .catch(err => {
      console.log('fetch sermon error', err);
      dispatch({type: CANCEL_REQUEST});
    });
};

// export const getUserDevices = () => dispatch => {
//   dispatch({type: LOADING});
//   apiService('/connected-device/get', 'GET')
//     .then(result => {
//       if (result.data.length > 0) {
//         const devices = result.data
//           .filter(elem => elem.status === 'connected')
//           .map(device => {
//             const storedDevice = store
//               .getState()
//               .devices.devices.find(dev => dev.id === device.hank_identifier);
//             const newDevice = {
//               ...device,
//               id: device.hank_identifier,
//               hankName: device.name,
//               lastSeen: Date.now(),
//             };
//             manager
//               .isPeripheralConnected(device.hank_identifier)
//               .then(isConnected => {
//                 console.log('conneKtro', isConnected, storedDevice);
//                 newDevice.isConnected = isConnected;
//                 if (storedDevice) {
//                   newDevice.lastSeen = isConnected
//                     ? Date.now()
//                     : storeDevice.lastSeen;
//                 }
//               });
//             return newDevice;
//           });
//         dispatch({type: REPLACE_DEVICES, payload: devices});
//       } else {
//         dispatch({type: REPLACE_DEVICES, payload: []});
//       }
//     })
//     .catch(error => {
//       console.log('getDeviceError', error);
//       dispatch({
//         type: CANCEL_REQUEST,
//         payload: error,
//       });
//     });

//   // try {
//   //   const response = await apiService('/connected-device/get', 'GET');
//   //   // dispatch({ type: MAKE_PAYMENT });
//   //   return Promise.resolve(response);
//   // } catch (error) {
//   //   return Promise.reject(error);
//   // }
// };

// export const deviceLostStatus = (deviceId, status) => async dispatch => {
//   try {
//     // const response = await apiService('/product', 'GET');
//     dispatch({
//       type: UPDATE_DEVICE,
//       payload: {deviceId, lost: status},
//     });
//     return Promise.resolve(true);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
