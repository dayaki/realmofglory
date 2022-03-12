import React from 'react';
import {View, ImageBackground} from 'react-native';
import {
  Button,
  HeaderText,
  RegularText,
  TextButton,
  TitleText,
} from '../components';
import {locationStyles as styles} from './styles';

const Locations = () => {
  const LocationView = () => (
    <View style={styles.location}>
      <View style={styles.locationImage}></View>
      <View style={styles.locationInfo}>
        <TitleText title="Surulere" style={styles.locationName} />
        <RegularText title="Surulere, Lagos" style={styles.locationState} />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <HeaderText title="Locations" style={styles.heading} />
      <RegularText
        title="Come worship with us in any of our locations"
        style={styles.headingText}
      />
    </View>
  );
};

export default Locations;
