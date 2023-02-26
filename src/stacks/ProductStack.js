import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../components/products/ProductScreen';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      {/* <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}
    </Stack.Navigator>
  );
};

export default ProductStack;
