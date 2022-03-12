import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  State,
  Capability,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { hp, wp } from './utils';
import { RegularText, TitleText } from './Text';
import { BlackCoral } from './Colors';

export const Player = ({ playerRef, audio, poster, title, preacher }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackState = usePlaybackState();
  const progress = useProgress();

  useEffect(() => {
    setupPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  const setupPlayer = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      return;
    }

    // Set up the player
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      // Icons for the notification on Android (if you don't like the default ones)
      // playIcon: require('./play-icon.png'),
      // pauseIcon: require('./pause-icon.png'),
      // stopIcon: require('./stop-icon.png'),
      // previousIcon: require('./previous-icon.png'),
      // nextIcon: require('./next-icon.png'),
      // icon: require('./notification-icon.png')
    });

    await TrackPlayer.add({
      id: 'trackId',
      url: audio,
      title,
      artist: preacher,
      album: 'Realm of GloryM',
      artwork: poster,
    });
  };

  const togglePlayback = async playBackState => {
    console.log('togglePlayback', playBackState);
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      // TODO: Perhaps present an error or restart the playlist?
    } else {
      if (playBackState !== State.Playing) {
        await TrackPlayer.play();
        setIsPlaying(true);
      } else {
        await TrackPlayer.pause();
        setIsPlaying(false);
      }
    }
  };

  const seekPlayer = async value => {
    if (value === 'back') {
      await TrackPlayer.seekTo(progress.position - 10);
    } else {
      await TrackPlayer.seekTo(progress.position + 10);
    }
  };

  return (
    <RBSheet
      ref={playerRef}
      height={450}
      openDuration={250}
      closeOnPressMask
      closeOnDragDown
      dragFromTopOnly
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
        container: styles.container,
        draggableIcon: {
          backgroundColor: '#fff',
          width: '40%',
        },
      }}>
      <View style={styles.contain}>
        <View style={styles.posterWrapper}>
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            style={styles.poster}
          />
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="cover"
            style={styles.logo}
          />
          <Image
            source={require('../../assets/images/volume.png')}
            resizeMode="cover"
            style={styles.soundIcon}
          />
        </View>
        <TitleText title={title} style={styles.title} />
        <RegularText title={preacher} style={styles.preacher} />

        <View style={styles.progrsBarSection}>
          {/* <Text>{secondsToHHMMSS(Math.floor(position.current || 0))}</Text> */}
          <Text>
            {new Date(progress.position * 1000)
              .toISOString()
              .substring(14, 14 + 5)}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            minimumTrackTintColor="#52527a"
            maximumTrackTintColor="#52527a"
            thumbTintColor="#52527a"
            maximumValue={progress.duration}
            value={progress.position}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          {/* <Text>{secondsToHHMMSS(progress.duration)}</Text> */}
          <Text>
            {new Date(progress.duration * 1000)
              .toISOString()
              .substring(14, 14 + 5)}
          </Text>
        </View>
        <View style={styles.playerBtns}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.audioBtns}
            onPress={() => seekPlayer('back')}>
            <Image
              source={require('../../assets/images/rewind.png')}
              resizeMode="cover"
              style={styles.playImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.audioBtn}
            onPress={() => togglePlayback(playbackState)}>
            <Image
              source={
                isPlaying
                  ? require('../../assets/images/pause.png')
                  : require('../../assets/images/play.png')
              }
              resizeMode="cover"
              style={styles.playImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.audioBtns}
            onPress={() => seekPlayer('forward')}>
            <Image
              source={require('../../assets/images/forward.png')}
              resizeMode="cover"
              style={styles.playImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    paddingHorizontal: wp(30),
    paddingTop: hp(4),
  },
  contain: { flex: 1 },
  posterWrapper: {
    width: wp(168),
    height: hp(164),
    alignSelf: 'center',
    position: 'relative',
    marginBottom: hp(20),
    // backgroundColor: 'pink',
  },
  poster: {
    width: wp(160),
    height: hp(160),
    borderRadius: wp(4),
    alignSelf: 'center',
  },
  soundIcon: {
    width: wp(20),
    height: hp(20),
    position: 'absolute',
    left: wp(14),
    bottom: hp(10),
  },
  logo: {
    width: wp(20),
    height: hp(20),
    position: 'absolute',
    right: wp(10),
    top: hp(8),
  },
  title: {
    color: BlackCoral,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  preacher: {
    color: BlackCoral,
    fontFamily: 'Montserrat-Medium',
    opacity: 0.5,
    fontSize: hp(10),
    textAlign: 'center',
    marginTop: hp(5),
    textTransform: 'capitalize',
  },
  progrsBarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(10),
  },
  slider: {
    width: '70%',
    height: 40,
  },
  playerBtns: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
  },
  playImg: {
    width: wp(34),
    height: hp(34),
  },
  playImage: {
    width: wp(50),
    height: hp(50),
  },
  audioBtn: {
    // backgroundColor: 'red',
    marginHorizontal: wp(50),
  },
});
