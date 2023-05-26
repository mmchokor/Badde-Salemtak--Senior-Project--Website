import { useAtom } from 'jotai'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
   deleteTravelerListingById,
   getTravelerListings,
} from '../../api/travelerListingAPI'
import { tokenJWT } from '../../global/logged'
import { TravelerListing } from '../../global/types'

const Traveler = () => {
   const queryClient = useQueryClient()

   const [token] = useAtom(tokenJWT)

   // fetch query
   const { isLoading, error, data } = useQuery<TravelerListing[], Error>(
      'travelerListings',
      () => getTravelerListings(token)
   )

   // delete query
   const { mutate } = useMutation(deleteTravelerListingById, {
      onSuccess: () => {
         // Invalidate the query cache to refetch the data
         console.log('deleted')
         queryClient.invalidateQueries(['travelerListings'])
      },
   })

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>

   return (
      <div className='container mx-auto'>
         <h1 className='mb-4 text-2xl font-bold'>Traveler Listings</h1>
         <div className='overflow-x-auto'>
            <table className='w-full table-auto'>
               <thead>
                  <tr>
                     <th className='px-4 py-2'>ID</th>
                     <th className='px-4 py-2'>Extra Weight</th>
                     <th className='px-4 py-2'>Date</th>
                     <th className='px-4 py-2'>Dimension</th>
                     <th className='px-4 py-2'>Ticket Number</th>
                     <th className='px-4 py-2'>Resident City</th>
                     <th className='px-4 py-2'>Description</th>
                     <th className='px-4 py-2'>User ID</th>
                     <th className='px-4 py-2'>Payment Method</th>
                     <th className='px-4 py-2'>Product Type</th>
                     <th className='px-4 py-2'>Country</th>
                     <th className='px-4 py-2'>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {data?.map((listing) => (
                     <tr key={listing._id}>
                        <td className='border px-4 py-2'>{listing._id}</td>
                        <td className='border px-4 py-2'>
                           {listing.extraWeight}
                        </td>
                        <td className='border px-4 py-2'>{listing.date}</td>
                        <td className='border px-4 py-2'>
                           {listing.dimension}
                        </td>
                        <td className='border px-4 py-2'>
                           {listing.ticketNumber}
                        </td>
                        <td className='border px-4 py-2'>
                           {listing.residentCity}
                        </td>
                        <td className='border px-4 py-2'>
                           {listing.description}
                        </td>
                        <td className='border px-4 py-2'>{listing.user._id}</td>
                        <td className='border px-4 py-2'>
                           {listing.paymentMethod}
                        </td>
                        <td className='border px-4 py-2'>
                           {listing.productType}
                        </td>
                        <td className='border px-4 py-2'>{listing.country}</td>
                        <td className='border px-4 py-2'>
                           <button
                              onClick={() => {
                                 if (window.confirm('Are you sure?')) {
                                    mutate({ id: listing._id, token: token })
                                 }
                              }}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Traveler
