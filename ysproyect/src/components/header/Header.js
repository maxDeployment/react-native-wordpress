import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {sizes} from '../../resources/constanst';
import logo from '../../asset/images/headers/logo.png';
import cartBtnIcon from '../../asset/images/headers/cart-icon.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.cartBtnIcon} source={cartBtnIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizes.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  arrowIcon: {
    width: 25,
    height: 21,
  },
  logo: {
    width: 96,
    height: 17,
  },
  cartBtn: {
    width: 25,
    height: 25,
  },
});

export default Header;
