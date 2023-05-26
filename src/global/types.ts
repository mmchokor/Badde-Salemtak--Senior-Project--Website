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

interface TravelerListing {
   _id: string
   extraWeight: number
   date: string
   dimension: string
   ticketNumber: string
   residentCity: string
   description: string
   user: User
   paymentMethod: string
   productType: string
   createdAt: string
   country: string
}

interface TravelerData {
   travelerListings: TravelerListing[]; 
 }
 
 interface TravelerResponse {
   data: TravelerData;
 }

// export all types
export type {
   LoginUser,
   ResidentData,
   ResidentListing,
   ResidentResponse, TravelerData,
   TravelerListing,
   TravelerResponse, User
}

