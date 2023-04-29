import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../constants/apiURL'

/**
 * Retrieves all notifications for the authenticated user.
 * @returns {Promise<Object>} An object containing an array of user notifications, or an error message.
 */
const getNotifications = async () => {
   try {
      const token = await AsyncStorage.getItem('token')
      // Get the user's notifications
      const response = await axios.get(`${API_URL}/notification`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      //console.log("Api" + response.data)
      //console.log("In api " + response.data.data.userNotifications)
      return response.data
      //return response.data.data.userNotifications
   } catch (error) {
      console.error(error)
      throw new Error('Failed to get notifications')
   }
}

/**
 * Deletes a specific notification for the authenticated user.
 * @param {string} id - The ID of the notification to be deleted.
 * @returns {Promise<Object>} An object containing a success status, or an error message.
 */
const deleteNotification = async (notificationId) => {
   try {
      const token = await AsyncStorage.getItem('token')
      const response = await axios.delete(
         `${API_URL}/notification/${notificationId}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      )
      return response.data.success
   } catch (error) {
      console.error(error)
      throw new Error('Failed to delete notification')
   }
}

module.exports = {
   getNotifications,
   deleteNotification,
}
