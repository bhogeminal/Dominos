import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MapView, { Marker } from "react-native-maps";

const OrderData = () => {
  return (
    <View style={{ backgroundColor: "#006491", flex: 1 }}>
  <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Order has been accepted
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Arriving in 30 min
        </Text>

        
      </View>
      <View style={{alignItems:"center",justifyContent:"center"}}>
          <MapView
          style={{height:500,width:500}}
            initialRegion={{
              latitude: 21.105796,
              longitude: 79.1171854,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
              <Marker coordinate={{latitude:21.105796, longitude: 79.1171854}} title='Dominos Pizza'description='Pizza centre'/>
          </MapView>
        </View>
        <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin:10,
          borderRadius:8,
          marginTop:10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            4 valets near the restaurent
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Anyone will pick your order
          </Text>
        </View>
      </View>
    </View>
  )
}

export default OrderData

const styles = StyleSheet.create({})