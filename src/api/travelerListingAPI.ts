import axios from 'axios'
import { TravelerResponse } from '../global/types'
import { API_URL } from './apiURL'

// Get all traveler listings
const getTravelerListings = async (
   token: string
   // eslint-disable-next-line
): Promise<any> => {
   const response: TravelerResponse = await axios.get(`${API_URL}/traveler`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   return response.data
}

// Delete traveler listing by ID
const deleteTravelerListingById = async ({
   id,
   token,
}: {
   id: string
   token: string
}): Promise<string> => {
   await axios.delete(`${API_URL}/traveler/${id}`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   return 'Success'
}

export { deleteTravelerListingById, getTravelerListings }

