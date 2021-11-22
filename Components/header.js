import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
function Header(props) {
  return (
    <View style={Style.container}>
      <Image
        style={Style.imageStyle}
        source={require('../Assests/icon/back.png')}
      />
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginLeft: 16,
  },
});
export default Header;
