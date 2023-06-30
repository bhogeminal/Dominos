import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {cartItem} from '../Context';
import sides from '../data/sides';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const CartScreen = () => {
const navigation=useNavigation();
  const {cart, setCart} = useContext(cartItem);
  const[counterItem,setCounterItem] = useState(0)
  const total = cart
    .map(item => Number(item.price * item.quantity))
    .reduce((pre, current) => pre + current, 0);
  console.log('total', total);

 useEffect(()=>{
  let count = Object.keys(cart).length;
 
 console.log("count",count)
        setCounterItem(count)
 })


  const addToCart = item => {
    setCart([...cart, item]);
  };
  const placeorder = item => {
    // navigation.navigate("Payment")
    setCart([]);
  };
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{ flexDirection: 'row', width: '100%',backgroundColor:'#fff' }}>

<TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '10%', fontWeight: 'bold', fontSize: 40, marginVertical: 30, color: '#000', textAlign: 'center' }}>
    <Ionicons name='arrow-back' size={30} color='#000' />
</TouchableOpacity>
<Text style={{ width: '60%', fontWeight: 'bold', fontSize: 20, marginVertical: 30, color: '#000',marginLeft:70}}>
    Added Items ({counterItem})
</Text>
<Text style={{ width: '30%', marginHorizontal: 5, marginVertical: 30 }}>
    <Ionicons name='home' size={30} color='#FD9C00' />
</Text>
</View>
        <ScrollView>
          {cart.map((item, key) => (
            <Pressable
              style={{
                backgroundColor: '#006491',
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
              key={key}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Image
                  style={{width: 70, height: 70, borderRadius: 6}}
                  source={{uri: item.image}}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 6,
                      }}>
                      <Text style={{color: 'white', fontSize: 15}}>
                        {item.size}
                      </Text>
                      <Text style={{color: 'white', fontSize: 15}}>
                        {' '}
                        | {item.description.substr(0, 25) + '...'}
                      </Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 15}}>
                      ₹ {item.price * item.quantity}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 8}}>
              {' '}
              People Also Ordered
            </Text>
            <ScrollView horizontal>
              {sides.map((item, index) => (
                <Pressable
                  style={{
                    margin: 10,
                    backgroundColor: '#E8E8E8',
                    borderRadius: 4,
                    width: 160,
                    height: 120,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 60, height: 60, borderRadius: 6}}
                      source={{uri: item.image}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={{width: 70, fontSize: 15}}>{item.name}</Text>
                      <Text style={{fontSize: 14, fontWeight: '700'}}>
                        ₹ {item.price}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      borderColor: '#BEBEBE',
                      borderRadius: 1,
                      borderStyle: 'dotted',
                      borderWidth: 1,
                      marginTop: 1,
                    }}
                  />
                  <Pressable onPress={() => addToCart(item)}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: 'green',
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      ADD TO CART
                    </Text>
                  </Pressable>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      {total === 0 ? (
         <Pressable
         style={{
           marginBottom: "auto",
           marginTop: "auto",
           alignItems: "center",
           justifyContent: "center",
           height: "100%",
         }}
       >
         <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
           Cart is empty!
         </Text>
         <Image
           style={{
             width: 250,
             height: 600,
             resizeMode: "contain",
           }}
           source={{
             uri: "https://pizzaonline.dominos.co.in/static/assets/empty_cart@2x.png",
           }}
         />
       </Pressable>
      )
       :(
      <View style={{height: 200}}>
        <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            name="location"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Delivering To Home
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                width: 200,
                marginTop: 3,
                color: 'gray',
              }}>
              25/2 Rna Shopping arcade Lucknow
            </Text>
          </View>
        </View>
        <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="paypal"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>₹ {total}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                width: 200,
                marginTop: 3,
                color: 'gray',
              }}>
              Pay via Cash{' '}
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'green',
            padding: 6,
            borderRadius: 5,
          }} onPress={placeorder}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Place Order
          </Text>
        </Pressable>
      </View>
       )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
