import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 100,
    marginBottom: 12,
    resizeMode: 'stretch'
  },
});

export default memo(Logo);
