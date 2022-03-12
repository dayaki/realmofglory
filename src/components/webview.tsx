import React, {useRef} from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import {RegularText} from './Text';
import {White} from './Colors';
import {hp, wp} from './utils';

const Web = ({uri}: {uri: string}) => {
  const webview = useRef();

  const onNavigationStateChange = event => {
    const {url} = event;
    console.log('web url', url);

    // successful payment
    // if (url.includes('payment-status=success')) {
    //   if (params.type !== undefined && params.type === 'subscription') {
    //     Actions.transaction_status({
    //       type: 'reset',
    //       status: 'Success',
    //       title: 'Successful Hank Subscription',
    //       message: 'Hey Chief, your Hank subscription plan is now active.',
    //       isComplete: true,
    //     });
    //   } else {
    //     Actions.transaction_status({
    //       type: 'reset',
    //       status: 'Success',
    //       title: 'Hank Purchase Successful',
    //       message:
    //         'You have successfully placed an order for hank. Your hank will be delivered within 14 working days',
    //       isOrder: true,
    //     });
    //   }
    // }

    // // failed payment
    // if (url.includes('payment-status=error')) {
    //   Actions.transaction_status({
    //     type: 'reset',
    //     title: 'Payment Failed',
    //     status: 'Cancelled',
    //     message:
    //       'Your order was not processed because your payment was not successful. Please ensure that your information was entered correctly and try again.',
    //     isOrder: true,
    //     retry: () => {
    //       Actions.webview({params});
    //     },
    //   });
    // }

    // if (url.includes('cancelled')) {
    //   Actions.pop();
    // }
  };
  const LoadingView = () => (
    <View style={styles.loadingView}>
      <RegularText title="Loading..." style={styles.loadingText} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={White} barStyle="dark-content" />
      <WebView
        source={{uri: uri}}
        ref={webview}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        domStorageEnabled
        onNavigationStateChange={onNavigationStateChange}
        mixedContentMode="always"
        thirdPartyCookiesEnabled
        renderLoading={LoadingView}
      />
    </SafeAreaView>
  );
};

export default Web;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: hp(10),
    fontSize: 20,
  },
  activityIndicator: {
    alignSelf: 'center',
    width: wp(100),
    height: hp(150),
  },
});
