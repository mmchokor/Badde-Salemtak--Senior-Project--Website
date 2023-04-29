import axios from 'axios'
import { ResidentListing, ResidentResponse } from '../global/types'
import { API_URL } from './apiURL'

// Get all resident listings
const getResidentListings = async (): Promise<ResidentListing[]> => {
   const response: ResidentResponse = await axios.get(`${API_URL}/resident`, {
      headers: {
         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGQ0NTE4MTY3YzE3YWU4NzE3YTM5YSIsImlhdCI6MTY4Mjc4NTU2MCwiZXhwIjoxNjg1Mzc3NTYwfQ.Jeper--GjVuG5oDzBvmFCYIU-WPTrv9O3kjcykZw9yU`,
      },
   })
   return response.data.data.residentListings
}

// Delete a resident listing by ID
const deleteResidentListingById = async (id: string): Promise<string> => {
   console.log(`${API_URL}/resident/${id}`)
   const response: ResidentResponse = await axios.delete(
      `${API_URL}/resident/${id}`,
      {
         headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGQ0NWVhZTZiY2M0MTY2ODA4YTYzMyIsImlhdCI6MTY4Mjc4NjYwMSwiZXhwIjoxNjg1Mzc4NjAxfQ.XeYnlgj7w6_WD-c38yDoPK7AmyE3OtAsdq24ROldXhw`,
         },
      }
   )
   console.log(response.data)
   return response.data.status
}

export { deleteResidentListingById, getResidentListings }

