import React from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {BackIcon} from '../../assets/icons';
import {RecentBanner, RegularText, TitleText} from '../components';
import {SeriesStyles as styles} from './styles';

const Series = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerBtn}
          onPress={() => navigation.goBack()}>
          <BackIcon color="#000" />
          <RegularText title="Back" style={styles.headerBtnText} />
        </TouchableOpacity>
        <TitleText title="Series" style={styles.headerTitle} />
      </View>
      <Image
        source={require('../../assets/images/series1.jpeg')}
        resizeMode="cover"
        style={styles.banner}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <RecentBanner
          title="Our calling is beyond the scope of our little Faith"
          preacher="Abraham Sam Aiyedogbon"
          image={require('../../assets/images/latest.jpeg')}
        />
        <RecentBanner
          title="All i do is wind!"
          preacher="Tim Somers"
          image={require('../../assets/images/latest.jpeg')}
        />
      </ScrollView>
    </View>
  );
};

export default Series;
