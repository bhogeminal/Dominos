import { StyleSheet, Text, View,FlatList,Pressable} from 'react-native'
import React,{useContext} from 'react'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import PizzaComponents from '../Components/PizzaComponents';
import pizzaMania from '../data/pizzaMania'
import { cartItem } from '../Context';
const Pizza = () => {
    const data = pizzaMania;
    const navigation = useNavigation();
    const {cart,setCart} = useContext(cartItem)
    console.log(cart,"cart Item");
    const total = cart.map((item)=> Number(item.price * item.quantity)).reduce((pre,current)=> pre + current,0)
    console.log("total",total)
    const renderItem = ({item}) => 
    <PizzaComponents pizza={item} />;
  
  return (
    <View>
    {/* <Icon
      name="arrow-back-outline"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
    /> */}
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
     {total === 0 ? (null):(
      <Pressable style={{backgroundColor:"green",padding:10,position:"absolute",
      bottom:100,left:150,borderRadius:6}} onPress={()=>navigation.navigate("Cart")} >
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"white"}}>
          Go to Cart
        </Text>
      </Pressable>)}
  </View>
  )
}

export default Pizza

const styles = StyleSheet.create({})