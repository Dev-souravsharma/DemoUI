import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Theme/Color';
function TabBar(props) {
  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Select recipient</Text>
      <Text style={[Style.textStyle, {color: Colors.green}]}>
        Select Details
      </Text>
      <Text style={Style.textStyle}>Preferences</Text>
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  textStyle: {
    color: 'grey',
    fontWeight: '600',
  },
});
export default TabBar;
