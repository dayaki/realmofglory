import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Play } from '../../assets/icons';
import { HeaderText, RegularText, TitleText } from '../components';
import { BroadcastStyles as styles } from './styles';

const Broadcasts = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderText title="Watch on Demand" style={styles.heading} />
      <RegularText
        title="Join us weekly for amazing worship and uplifting sermons."
        style={styles.headingText}
      />
      <TouchableOpacity activeOpacity={0.9} style={styles.banner}>
        <Image
          source={require('../../assets/images/banner1.jpg')}
          resizeMode="cover"
          style={styles.bannerImage}
        />
        <View activeOpacity={0.7} style={styles.playBtn}>
          <Play size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <View style={styles.section}>
        <HeaderText title="Schedule" style={styles.sectionTitle} />
        <View style={styles.info}>
          <TitleText title="Sundays" style={styles.infoTitle} />
          <View style={styles.boxTwo}>
            <TitleText title="9:00AM" style={styles.boxTitle} />
            <RegularText title="Sunday First Service" style={styles.boxText} />
            <View style={styles.divider} />
            <TitleText title="10:30AM" style={styles.boxTitle} />
            <RegularText title="Sunday Second Service" style={styles.boxText} />
          </View>
        </View>

        <View style={[styles.info, styles.infoTop]}>
          <TitleText title="Wednesdays" style={styles.infoTitle} />
          <View style={styles.box}>
            <TitleText title="7:00PM" style={styles.boxTitle} />
            <RegularText
              title="Faith Activation Service"
              style={styles.boxText}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Broadcasts;
