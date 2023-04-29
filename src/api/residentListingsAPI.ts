import axios from 'axios'
import { ResidentListing, ResidentResponse } from '../global/types'
import { API_URL } from './apiURL'

// Get all resident listings
const getResidentListings = async (): Promise<ResidentListing[]> => {
   const response: ResidentResponse = await axios.get(`${API_URL}/resident`, {
      headers: {
         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWJiMGYzYzFiNWExMzQzNDhjY2RjNCIsImlhdCI6MTY4MTAzNjM5MywiZXhwIjoxNjgzNjI4MzkzfQ.HtQl6PlCF1qrfBbcI482YFxebzCIfVeRgSR0yioD20c`,
      },
   })
   return response.data.data.residentListings
}

// Delete a resident listing by ID
const deleteResidentListingById = async (id: string): Promise<string> => {
   try {
      const response: ResidentResponse = await axios.delete(
         `${API_URL}/resident/${id}`,
         {
            headers: {
               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWJiMGYzYzFiNWExMzQzNDhjY2RjNCIsImlhdCI6MTY4MTAzNjM5MywiZXhwIjoxNjgzNjI4MzkzfQ.HtQl6PlCF1qrfBbcI482YFxebzCIfVeRgSR0yioD20c`,
            },
         }
      )
      return response.data.status

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: any) {
      throw error.response.data
   }
}

export { deleteResidentListingById, getResidentListings }

