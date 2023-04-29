// Types
interface User {
   _id: string
   firstname: string
   lastname: string
}

interface LoginUser {
   email: string
   password: string
}

interface ResidentListing {
   _id: string
   name: string
   description: string
   imageCover: string
   images: string[]
   createdAt: string
   user: User
   cityOfResidence: string
   approximateWeight: number
   quantity: number
   price: number
   paymentMethod: string
   productType: string
}

interface ResidentData {
   residentListings: ResidentListing[]
}

interface ResidentResponse {
   data: {
      data: ResidentData
      status: string
      results: number
   }
}

// export all types
export type { LoginUser, ResidentData, ResidentListing, ResidentResponse, User }

