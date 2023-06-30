import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {cartItem} from '../Context';
import pizza from '../data/pizza';
import Toast from 'react-native-root-toast';
const PizzaComponents = ({pizza}) => {
  let data = [pizza];
  // console.log('item', data);
  const options = ['Large', 'Regular', 'Small'];
  const {cart, setCart} = useContext(cartItem);
  const [selected, setseleced] = useState(false);
  const [addItem, setaddItems] = useState(0);
  const[size,setSize] = useState("Medium")
  console.log(cart, 'cartItems');
  console.log(cart.length, 'no of cart');
  const addToCart = () => {
    setseleced(true);
    if (addItem === 0) {
      setaddItems(1);
    }

    const Itempresent = cart.find(item => item.id === pizza.id);
    if (Itempresent) {
      setCart(
        cart.map(x =>
          x.id === pizza.id
            ? {...Itempresent, quantity: Itempresent.quantity + 1}
            : x,
        ),
      );
    } else {
      setCart([...cart, {...pizza, quantity: 1,size:size}]);
    }
    let toast = Toast.show("Added to cart",{ duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,})
      setTimeout(function () {
        Toast.hide(toast);
    }, 500);
    setaddItems(addItem + 1);
  };
  const removeFromCart = () => {
    const Itempresent = cart.find(item => item.id === pizza.id);

    if (addItem === 1) {
      setseleced(false);
      setCart(cart.filter(X => X.id !== pizza.id));
    } else {
      setCart(
        cart.map(x =>
          x.id === pizza.id
            ? {...Itempresent, quantity: Itempresent.quantity - 1}
            : x,
        ),
      );
    }
    let toast = Toast.show("Remove to cart",{ duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,})
      setTimeout(function () {
        Toast.hide(toast);
    }, 500);
    setaddItems(Math.max(0, addItem - 1));
  };
  return (
    <View>
      {data.map((item, index) => (
        //  console.log(item)
        <Pressable
          style={{borderEndColor: '#AFD8F5', borderWidth: 0.1}}
          key={index}>
          <Image
            source={{uri: item.image}}
            style={{height: 200, aspectRatio: 5 / 5, resizeMode: 'cover'}}
          />
          <View style={{backgroundColor: '#006491', padding: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              {item.name.substr(0, 15) + '...'}
            </Text>
            <Text style={{color: 'pink'}}>
              {item.description.substr(0, 25) + '...'}
            </Text>
            <Pressable
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View>
                <Text style={{color: 'white', fontSize: 15}}>Size</Text>
                <ModalDropdown
                  options={options}
                  dropdownStyle={{width: 60, height: 100}}
                  style={{width: 60}}></ModalDropdown>
              </View>
              {selected ? (
                <Pressable
                  style={{
                    backgroundColor: '#03C03C',
                    padding: 5,
                    marginLeft: 15,
                    borderRadius: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Pressable onPress={removeFromCart}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                      }}>
                      -
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      fontSize: 18,
                      color: 'white',
                      paddingHorizontal: 5,
                      fontWeight: '600',
                    }}>
                    <Text>{addItem}</Text>
                  </Pressable>
                  <Pressable onPress={addToCart}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                      }}>
                      +
                    </Text>
                  </Pressable>
                </Pressable>
              ) : (
                <Pressable
                  onPress={addToCart}
                  style={{
                    backgroundColor: '#03C03C',
                    padding: 5,
                    marginLeft: 15,
                    color: 'white',
                  }}>
                  <Text>Add to Cart</Text>
                </Pressable>
              )}
            </Pressable>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PizzaComponents;

const styles = StyleSheet.create({});
