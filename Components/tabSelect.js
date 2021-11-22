import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Theme/Color';
function TabSelect() {
  return (
    <View style={Style.container}>
      <View style={Style.circle}>
        <View style={Style.innerCircle}></View>
      </View>
      <Text> - - - - - - - - - </Text>
      <View style={Style.circleGrey}>
        <View style={Style.innerCircleGrey}></View>
      </View>
      <Text> - - - - - - - - - </Text>
      <View style={Style.circleGrey}>
        <View style={Style.innerCircleGrey}></View>
      </View>
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 36,
    justifyContent: 'space-around',
  },
  circle: {
    borderWidth: 1.5,
    width: 30,
    height: 30,
    borderColor: Colors.green,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGrey: {
    borderWidth: 1.5,
    width: 30,
    height: 30,
    borderColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 14,
    height: 14,
    backgroundColor: Colors.green,
    borderRadius: 100,
  },
  innerCircleGrey: {
    width: 14,
    height: 14,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
});
export default TabSelect;
