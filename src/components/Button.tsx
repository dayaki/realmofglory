import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import * as Colors from './Colors';
import {wp, hp} from './utils';

interface ButtonProps {
  title: string;
  buttonStyle?: {};
  textStyle?: {};
  isLoading?: boolean;
  onPress?(): void;
}

export const Button = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  isLoading,
}: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.button, buttonStyle]}
    onPress={onPress}
    disabled={isLoading}>
    {isLoading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    )}
  </TouchableOpacity>
);

export const TextButton = ({title, textStyle, onPress}: ButtonProps) => (
  <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    <Text style={[styles.textButton, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PrimaryBrand,
    width: wp(280),
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.White,
    fontSize: hp(14),
    fontFamily: 'Montserrat-Bold',
    textTransform: 'capitalize',
  },
  textButton: {
    color: Colors.LightGrey,
    fontSize: hp(13),
    textTransform: 'capitalize',
    fontFamily: 'Montserrat-Medium',
  },
});
