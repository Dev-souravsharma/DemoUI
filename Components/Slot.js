import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Theme/Color';
function Slot({title, num}) {
  return (
    <View style={Style.container}>
      <Text style={Style.titleStyle}>{title}</Text>
      <Text style={Style.numStyle}>{num}</Text>
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.green,
    width: 100,
    padding: 12,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
  },
  numStyle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
export default Slot;
