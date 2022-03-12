import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Search} from '../../assets/icons';
import {BlackCoral, RecentBanner, TextButton} from '../components';
import {sermonListStyles as styles} from './styles';

const SermonList = ({navigation}) => {
  const handleSearch = text => {
    console.log('search...., ', text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Search color="#000" />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={BlackCoral}
            clearButtonMode="while-editing"
            onChangeText={handleSearch}
          />
        </View>
        <TextButton
          textStyle={styles.searchCancel}
          title="Cancel"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <RecentBanner
          title="Birthing a new Nation by Divine Wisdom"
          preacher="Ladi Thompson"
          image={require('../../assets/images/ladi_thompson.jpg')}
        />
        <RecentBanner
          title="Needed: Fathers and Mothers for the Nation"
          preacher="Abraham Sam Aiyedogbon"
          image={require('../../assets/images/asa-110721.jpg')}
        />
      </ScrollView>
    </View>
  );
};

export default SermonList;
