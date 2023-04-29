import axios from 'axios'
import { ResidentListing, ResidentResponse } from '../global/types'
import { API_URL } from './apiURL'

// Get all resident listings
const getResidentListings = async (
   token: string
): Promise<ResidentListing[]> => {
   // eslint-disable-next-line
   const response: ResidentResponse = await axios.get(`${API_URL}/resident`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   return response.data.data.residentListings
}

// Delete a resident listing by ID
const deleteResidentListingById = async ({
   id,
   token,
}: {
   id: string
   token: string
}): Promise<string> => {
   const response: ResidentResponse = await axios.delete(
      `${API_URL}/resident/${id}`,
      {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      }
   )
   return response.data.status
}

export { deleteResidentListingById, getResidentListings }

