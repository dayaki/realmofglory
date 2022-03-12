import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  HeaderText,
  MediumBanner,
  RecentBanner,
  SeriesBanner,
  RegularText,
  TitleText,
  SkeletonLoader,
} from '../components';
import {fetchSermons} from '../store/actions/sermonActions';
import {saveSermons} from '../store/slice';
import apiService from '../utils/apiService';
import {styles} from './styles';

const Sermons = ({navigation}) => {
  const sermons = useSelector(state => state.sermons);
  const [isLoading, setIsLoading] = useState(true);
  // const [allSermons, setAllSermons] = useState(sermons);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('sermons', sermons);
    if (sermons.length === 0) {
      apiService('sermons', 'get')
        .then(({data}) => {
          console.log('sermons remote', data);
          dispatch(saveSermons(data));
          setIsLoading(false);
        })
        .catch(err => {
          console.log('sermon err', err);
          setIsLoading(false);
        });
      // .finally(() => );
    } else {
      setIsLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   // dispatch(fetchSermons());
  //   if (data.length === 0) {
  //     dispatch(fetchSermons());
  //   } else {
  //     // const updatedSermons = data;
  //     // setLatest(updatedSermons.shift());
  //     // setAllSermons(updatedSermons);
  //     // setIsLoading(false);
  //   }
  // }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {isLoading ? (
        <SkeletonLoader isLoading={true} />
      ) : (
        <>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate('SermonDetails', {sermon: sermons[0]})
            }
            style={styles.latest}>
            <ImageBackground
              source={{uri: sermons[0].image}}
              style={styles.latestBanner}
              resizeMode="cover">
              <View style={styles.overlay} />
              <View style={styles.tag}>
                <RegularText title="Latest Sermon" style={styles.tagText} />
              </View>
              <TitleText title={sermons[0].title} style={styles.sermonTitle} />
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.section}>
            <HeaderText title="Popular Sermons" style={styles.sectionTitle} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.sectionScroll}>
              <MediumBanner
                image={require('../../assets/images/latest.jpeg')}
                title="When the battle chooses you and them"
                preacher="Abraham Sam Aiyedogbon"
              />
              <MediumBanner
                image={require('../../assets/images/latest.jpeg')}
                title="When the battle chooses you and them"
                preacher="Abraham Sam Aiyedogbon"
              />
              <MediumBanner
                image={require('../../assets/images/latest.jpeg')}
                title="When the battle chooses you and them"
                preacher="Abraham Sam Aiyedogbon"
              />
            </ScrollView>
          </View>

          <View style={styles.section}>
            <HeaderText title="Series" style={styles.sectionTitle} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.sectionScroll}>
              <SeriesBanner
                image={require('../../assets/images/series1.jpeg')}
                onPress={() => navigation.navigate('Series')}
              />
              <SeriesBanner
                image={require('../../assets/images/series2.jpeg')}
                onPress={() => navigation.navigate('Series')}
              />
              <SeriesBanner
                image={require('../../assets/images/series3.jpeg')}
                onPress={() => navigation.navigate('Series')}
              />
            </ScrollView>
          </View>

          <View style={styles.section}>
            <HeaderText title="Recent Sermons" style={styles.sectionTitle} />
            {sermons.map(sermon => (
              <RecentBanner
                key={sermon._id}
                title={sermon.title}
                preacher={sermon.preacher}
                image={{uri: sermon.image}}
                onPress={() => navigation.navigate('SermonDetails', {sermon})}
              />
            ))}

            <Button
              title="View more sermons"
              buttonStyle={styles.loadMore}
              textStyle={styles.loadMoreText}
              onPress={() => navigation.navigate('SermonList')}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Sermons;
