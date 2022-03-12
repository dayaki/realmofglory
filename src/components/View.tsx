import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {wp, hp, truncateWords, truncateText} from './utils';
import {RegularText, TitleText} from './Text';
import * as Colors from './Colors';
import {BackIcon} from '../../assets/icons';

interface BannerProps {
  image: object;
  title: string;
  preacher: string;
  onPress?(): void;
}

interface ViewProps {
  children: {};
  title?: string;
  back?: boolean;
  onPress?(): void;
}

export const BackgroundView = ({children, onPress, title}: ViewProps) => (
  <>
    <SafeAreaView style={styles.safeview} />
    <View style={styles.scrollHeader}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.scrollBtn}
        onPress={onPress}>
        <BackIcon color="#000" />
        <RegularText title="Back" style={styles.scrollBtnText} />
      </TouchableOpacity>
      {title && <TitleText title={title} style={styles.scrollTitle} />}
    </View>
    <ScrollView style={styles.scroll}>{children}</ScrollView>
  </>
);

export const MediumBanner = ({image, title, preacher}: BannerProps) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.medium}>
    <View style={styles.imageWrapper}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
    <RegularText title={truncateWords(title)} style={styles.title} />
    <RegularText title={preacher} style={styles.preacher} />
  </TouchableOpacity>
);

export const SeriesBanner = ({image, onPress}: BannerProps) => (
  <TouchableOpacity style={styles.series} activeOpacity={0.8} onPress={onPress}>
    <View style={styles.seriesImage}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
  </TouchableOpacity>
);

export const RecentBanner = ({
  image,
  title,
  preacher,
  onPress,
}: BannerProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.recentBanner}
    onPress={onPress}>
    <View style={styles.recentWrapper}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
    <View style={styles.textWrapper}>
      <RegularText title={title} style={styles.recentTitle} />
      <RegularText title={preacher} style={styles.recentPreacher} />
    </View>
  </TouchableOpacity>
);

export const SkeletonLoader = ({isLoading}: {isLoading: boolean}) => (
  <SkeletonContent
    containerStyle={styles.skeleton}
    isLoading={isLoading}
    animationDirection="horizontalRight"
    layout={[
      {key: 'latest', width: '100%', height: 340, marginBottom: 6},
      {
        key: 'section-title-1',
        width: 200,
        height: 20,
        marginTop: 20,
      },
      {
        flexDirection: 'row',
        marginTop: 20,
        children: [
          {
            width: 240,
            height: 170,
            marginRight: 20,
            borderRadius: 8,
          },
          {
            width: 240,
            height: 170,
            borderRadius: 8,
          },
        ],
      },
      {
        flexDirection: 'row',
        marginTop: 10,
        children: [
          {
            width: 200,
            height: 10,
            marginRight: 60,
          },
          {
            width: 200,
            height: 10,
          },
        ],
      },
      {
        flexDirection: 'row',
        marginTop: 6,
        children: [
          {
            width: 180,
            height: 8,
            marginRight: 80,
          },
          {
            width: 180,
            height: 6,
          },
        ],
      },
      {
        key: 'section-title-2',
        width: 100,
        height: 20,
        marginTop: 30,
      },
      {
        flexDirection: 'row',
        marginTop: 20,
        children: [
          {
            width: 280,
            height: 160,
            marginRight: 20,
            borderRadius: 8,
          },
          {
            width: 280,
            height: 160,
            borderRadius: 8,
          },
        ],
      },
    ]}
  />
);

const styles = StyleSheet.create({
  skeleton: {
    flex: 1,
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
  },
  scroll: {
    backgroundColor: Colors.White,
  },
  scrollHeader: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
  },
  safeview: {
    backgroundColor: Colors.White,
    paddingVertical: hp(10),
  },
  scrollBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  scrollBtnText: {
    marginLeft: wp(8),
  },
  scrollTitle: {
    fontSize: hp(18),
  },
  series: {
    width: wp(280),
    height: hp(160),
    marginRight: wp(20),
  },
  seriesImage: {
    width: wp(280),
    height: hp(160),
    borderRadius: 8,
    overflow: 'hidden',
  },
  medium: {
    width: wp(240),
    height: hp(170),
    marginRight: wp(20),
  },
  imageWrapper: {
    width: '100%',
    height: hp(120),
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: Colors.Black,
    textTransform: 'capitalize',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: hp(13),
    marginTop: hp(8),
    marginBottom: hp(3),
  },
  preacher: {
    fontSize: 13,
    marginTop: hp(2),
    marginBottom: hp(3),
    color: Colors.Black,
    opacity: 0.5,
    textTransform: 'capitalize',
    fontFamily: 'Montserrat-Regular',
  },
  recentBanner: {
    width: '90%',
    height: hp(90),
    marginVertical: hp(10),
    paddingBottom: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: Colors.Smoke300,
    borderBottomWidth: hp(2),
    marginLeft: wp(20),
  },
  recentWrapper: {
    width: '40%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  textWrapper: {
    width: '57%',
    height: '100%',
  },
  recentTitle: {
    fontSize: hp(13),
    margin: 0,
    flexWrap: 'wrap',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat-Medium',
    color: Colors.Black,
  },
  recentPreacher: {
    fontFamily: 'Montserrat-Light',
    fontSize: hp(12),
    marginTop: hp(3),
    marginBottom: hp(3),
    color: Colors.Black,
    textTransform: 'capitalize',
  },
});
