import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Colors from './Colors';

interface TextProps {
  title: string;
  style?: {};
}

export const RegularText = ({ title, style }: TextProps) => (
  <Text style={[styles.regular, style]}>{title}</Text>
);

export const HeaderText = ({ title, style }: TextProps) => (
  <Text style={[styles.header, style]}>{title}</Text>
);

export const TitleText = ({ title, style }: TextProps) => (
  <Text style={[styles.title, style]}>{title}</Text>
);

const styles = StyleSheet.create({
  regular: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.Black,
  },
  header: {
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
});
