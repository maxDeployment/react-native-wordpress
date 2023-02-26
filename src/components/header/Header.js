import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';

import {sizes} from '../../resources/constanst';
import logo from '../../asset/images/headers/logo.png';
import cartBtnIcon from '../../asset/images/headers/cart-icon.png';
import goBackBtn from '../../asset/images/headers/go-back-icon.png';

const Header = props => {
  const {route, navigation} = props;
  //Condicion para no mostrar el boton de volver atrás si estamos en la pantalla principal
  const isProductsScreen = route.name === 'Products';

  return (
    <View style={styles.container}>
      {!isProductsScreen && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={goBackBtn} />
        </Pressable>
      )}
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
