import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../constants/apiURL'


// data should include const { listing, serviceFee, deliveryFee, date, message }
const createOrder = async (data) => {
   try {
      const token = await AsyncStorage.getItem('token')
      const response = await axios.post(`${API_URL}/order`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      console.log(response.data)
      return response.data
   } catch (error) {
      console.error(error)
      throw new Error('Failed to create order')
   }
}

const getOrdersByListing = async (listingId) => {
   try {
      const token = await AsyncStorage.getItem('token')
      const response = await axios.get(
         `${API_URL}/order/listing/${listingId}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      )
      return response.data
   } catch (error) {
      console.error(error)
      throw new Error('Failed to get orders')
   }
}

const getOrderById = async (orderId)  => {
   try {
      const token = await AsyncStorage.getItem('token')
     const response = await axios.get(`${API_URL}/order/${orderId}`, {
       headers: {
         Authorization: `Bearer ${token}`
       }
     });
     return response.data.data.order
   } catch (error) {
     console.log(error)
   }
 }

module.exports = {
   createOrder,
   getOrdersByListing,
   getOrderById
}
