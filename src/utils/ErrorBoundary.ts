// import React from 'react';
// import {View} from 'react-native';
// import RNRestart from 'react-native-restart';
// import {ParagraphText, RegularText, RoundedButton, wp} from './common';

// export default class ErrorBoundary extends React.Component {
//   state = {hasError: false};

//   static getDerivedStateFromError() {
//     return {hasError: true};
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <ParagraphText
//             title={'Oops! \n Something went wrong!'}
//             style={{fontSize: 16, textAlign: 'center', lineHeight: 25}}
//           />
//           <RegularText
//             title="We are working to fix it, please bear with us. Kindly report this issue and restart the app a few seconds later"
//             style={{
//               fontSize: 14,
//               textAlign: 'center',
//               width: wp(290),
//               lineHeight: 25,
//             }}
//           />
//           <RoundedButton
//             title="Restart app"
//             style={{marginTop: 40, width: '60%', height: 50}}
//             onPress={() => RNRestart.Restart()}
//           />
//         </View>
//       );
//     }
//     return this.props.children;
//   }
// }
