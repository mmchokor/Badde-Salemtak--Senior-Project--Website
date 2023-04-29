import { useAtom } from 'jotai'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
   deleteResidentListingById,
   getResidentListings,
} from '../../api/residentListingsAPI'
import { tokenJWT } from '../../global/logged'
import { ResidentListing } from '../../global/types'

const Resident = () => {
   const queryClient = useQueryClient()

   const [token] = useAtom(tokenJWT)

   // fetch query
   const { isLoading, error, data } = useQuery<ResidentListing[], Error>(
      'residentListings',
      () => getResidentListings(token)
   )

   // delete query
   const { mutate } = useMutation(deleteResidentListingById, {
      onSuccess: () => {
         // Invalidate the query cache to refetch the data
         console.log('deleted')
         queryClient.invalidateQueries(['residentListings'])
      },
   })

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>

   return (
      <div className='container mx-auto'>
         <h1 className='mb-4 text-2xl font-bold'>Resident Listings</h1>
         <table className='w-full table-auto'>
            <thead>
               <tr>
                  <th className='px-4 py-2'>ID</th>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Description</th>
                  <th className='px-4 py-2'>Image</th>
                  <th className='px-4 py-2'>Price</th>
                  <th className='px-4 py-2'>Created At</th>
                  <th className='px-4 py-2'>User ID</th>
                  <th className='px-4 py-2'>Quantity</th>
                  <th className='px-4 py-2'>Actions</th>
               </tr>
            </thead>
            <tbody>
               {data?.map((listing) => (
                  <tr key={listing._id}>
                     <td className='border px-4 py-2'>{listing._id}</td>
                     <td className='border px-4 py-2'>{listing.name}</td>
                     <td className='border px-4 py-2'>{listing.description}</td>
                     <td className='cursor-pointer border px-4 py-2'>
                        <a href={listing.imageCover} target='_blank'>
                           Go to Image
                        </a>
                     </td>
                     <td className='border px-4 py-2'>{listing.price}</td>
                     <td className='border px-4 py-2'>{listing.createdAt}</td>
                     <td className='border px-4 py-2'>{listing.user._id}</td>
                     <td className='border px-4 py-2'>{listing.quantity}</td>
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
   )
}

export default Resident
