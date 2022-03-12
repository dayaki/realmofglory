import React from 'react';
import {View, ImageBackground} from 'react-native';
import {
  Button,
  HeaderText,
  RegularText,
  TextButton,
  TitleText,
} from '../components';
import {givingStyles as styles} from './styles';

const Giving = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderText title="Giving" style={styles.heading} />
      <RegularText
        title="See God's promises fulfilled through your generosity."
        style={styles.headingText}
      />
      <View style={styles.banner}>
        <ImageBackground
          source={require('../../assets/images/giving.jpg')}
          resizeMode="cover"
          style={styles.bannerImage}>
          <TitleText
            title="Covenant Commitment Seed"
            style={styles.bannerTitle}
          />
          <RegularText
            title="Trust God with your finances by giving your first 10% back to him."
            style={styles.bannerText}
          />
        </ImageBackground>
      </View>
      <View>
        <Button
          title="Give now with PayStack"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('GiveModal')}
        />
        <TextButton title="See Other ways to give" textStyle={styles.btnText} />
      </View>
    </View>
  );
};

export default Giving;
