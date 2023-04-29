import { useQuery } from 'react-query'
import { getResidentListings } from '../../api/residentListingsAPI'
import { ResidentListing } from '../../global/types'

const Resident = () => {
   const { isLoading, error, data } = useQuery<ResidentListing[], Error>(
      'residentListings',
      getResidentListings
   )

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>

   return (
      <div className='container mx-auto'>
         <h1 className='mb-4 text-2xl font-bold'>Resident Listings</h1>
         <table className='w-full table-auto'>
            <thead>
               <tr>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Description</th>
                  <th className='px-4 py-2'>Image</th>
                  <th className='px-4 py-2'>Price</th>
                  <th className='px-4 py-2'>Quantity</th>
               </tr>
            </thead>
            <tbody>
               {data?.map((listing) => (
                  <tr key={listing._id}>
                     <td className='border px-4 py-2'>{listing.name}</td>
                     <td className='border px-4 py-2'>{listing.description}</td>
                     <td className='cursor-pointer border px-4 py-2'>
                        <a href={listing.imageCover} target='_blank'>
                           Go to Image
                        </a>
                     </td>
                     <td className='border px-4 py-2'>{listing.price}</td>
                     <td className='border px-4 py-2'>{listing.quantity}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Resident
