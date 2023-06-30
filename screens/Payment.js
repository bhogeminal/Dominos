import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GooglePay from 'react-native-google-pay';
const Payment = () => {

  const handlePayment = async () => {
    try {
      const paymentDataRequest = {
        cardPaymentMethod: {
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            gateway: 'your_payment_gateway',
            gatewayMerchantId: 'your_merchant_id',
          },
          allowedCardNetworks: ['VISA', 'MASTERCARD'],
          billingAddressRequired: true,
          billingAddressParameters: {
            format: 'FULL',
            phoneNumberRequired: true,
          },
        },
        transaction: {
          totalPrice: '10',
          totalPriceStatus: 'FINAL',
          currencyCode: 'USD',
        },
        merchantName: 'Your Merchant Name',
      };

      const token = await GooglePay.openPaymentSheet(paymentDataRequest);
      // Handle the payment token returned by Google Pay
      console.log('Payment Token:', token);
    } catch (error) {
      console.log('Google Pay Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pay with Google Pay" onPress={handlePayment} />
    </View>
  );
}

export default Payment

const styles = StyleSheet.create({})