import React, { useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Download, Play, Share, BackIcon } from '../../assets/icons';
import { RegularText, Player } from '../components';
import { SermonDetailsStyles as styles } from './styles';

const SermonDetails = ({ navigation, route }) => {
  const { sermon } = route.params;
  const player = useRef();

  const playAudio = () => {
    player.current.open();
  };
  return (
    <>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <BackIcon color="#fff" />
        </TouchableOpacity>
        <Image
          source={{ uri: sermon.image }}
          resizeMode="cover"
          style={styles.bgImage}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.playBtn}
          onPress={() => playAudio()}>
          <Play size={18} color="#fff" />
        </TouchableOpacity>
        <View style={styles.overlay} />
      </View>
      <View style={styles.author}>
        <RegularText title={sermon.title} style={styles.title} />
        <RegularText title={sermon.preacher} style={styles.preacher} />
        <RegularText
          title={moment(sermon.isodate).format('dddd, MMMM D, YYYY')}
          style={styles.date}
        />
        <View style={styles.line} />
        <RegularText
          title="In this message, our calling is beyond the scope of our little Faith."
          style={styles.text}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <TouchableOpacity activeOpacity={0.8} style={styles.footerItemBtn}>
            <Play size={14} />
          </TouchableOpacity>
          <RegularText title="Listen" style={styles.footerItemText} />
        </View>

        <View style={styles.footerItem}>
          <TouchableOpacity activeOpacity={0.8} style={styles.footerItemBtn}>
            <Download size={14} />
          </TouchableOpacity>
          <RegularText title="Download" style={styles.footerItemText} />
        </View>

        <View style={styles.footerItem}>
          <TouchableOpacity activeOpacity={0.8} style={styles.footerItemBtn}>
            <Share size={14} />
          </TouchableOpacity>
          <RegularText title="Share" style={styles.footerItemText} />
        </View>
      </View>
      <Player
        playerRef={player}
        audio={sermon.audio}
        poster={sermon.image}
        title={sermon.title}
        preacher={sermon.preacher}
      />
    </>
  );
};

export default SermonDetails;
