import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function CustomList(props) {
  return (
    <View style={Style.container}>
      <View style={Style.timeStyle}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {props.time}
        </Text>
        <Text>Hours</Text>
      </View>
      <View style={Style.titleStyle}>
        <Text style={{fontSize: 16}}>{props.title}</Text>
        <Text style={{fontSize: 12, color: 'grey'}}>{props.subTitle}</Text>
      </View>
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 16,
    flexDirection: 'row',
    marginTop: 12,
  },
  timeStyle: {
    flex: 1,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    flex: 6,
    justifyContent: 'center',
    marginLeft: 16,
  },
});
export default CustomList;
