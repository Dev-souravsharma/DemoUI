import React from 'react';
import {SafeAreaView, View, Text, ScrollView, Pressable} from 'react-native';
import CustomList from '../../Components/customList';
import Header from '../../Components/header';
import Slot from '../../Components/Slot';
import TabBar from '../../Components/tabbar';
import TabSelect from '../../Components/tabSelect';
import Colors from '../../Theme/Color';
import Styles from './styles';
function DemoUI() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
          <TabBar />
          <View style={{marginVertical: 16}}>
            <TabSelect />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 26,
                marginTop: 8,
              }}>
              <Text>Services</Text>
              <Text>Timmings</Text>
              <Text>Location</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontWeight: '700', fontSize: 24}}>
              Covid-19 Vaccination
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginVertical: 16,
            }}>
            <Slot title="Minimum hours" num="2" />
            <Slot title="Price per hour" num="35" />
            <Slot title="Subsequent hours" num="30" />
          </View>
          <View style={{marginHorizontal: 16, marginVertical: 16}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Select your hour
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
                borderColor: 'grey',
                marginVertical: 16,
              }}>
              <Text style={Styles.numberstyle}>1</Text>
              <Text style={Styles.numberstyle}>2</Text>
              <Text style={Styles.numberstyle}>3</Text>
              <View
                style={{
                  backgroundColor: Colors.green,
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <Text style={[Styles.numberstyle, {color: 'white'}]}>4</Text>
              </View>
              <Text style={Styles.numberstyle}>5</Text>
              <Text style={Styles.numberstyle}>6</Text>
              <Text style={Styles.numberstyle}>7</Text>
              <Text style={Styles.numberstyle}>8</Text>
            </View>
            <Text style={{alignSelf: 'center', fontSize: 16}}>Or</Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Packages</Text>
            <CustomList
              title="RM54 per 2 hour"
              subTitle="Suitable for one Session"
              time="2"
            />
            <CustomList
              title="RM260 per 10 hour"
              subTitle="Suitable for one Session"
              time="10"
            />
            <CustomList
              title="RM540 per 20 hour"
              subTitle="Suitable for one Session"
              time="20"
            />
          </View>
          <View style={{alignItems: 'center', marginVertical: 16}}>
            <Pressable
              style={{
                backgroundColor: Colors.green,
                padding: 16,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Next
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default DemoUI;
