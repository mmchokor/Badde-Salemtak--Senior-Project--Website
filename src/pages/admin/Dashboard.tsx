import { SetStateAction, useState } from 'react'
import Resident from '../admin/Resident'
import Traveler from '../admin/Traveler'
import User from '../admin/User'

const Dashboard = () => {
   const [selectedComponent, setSelectedComponent] = useState('A')

   const handleComponentChange = (e: {
      target: { value: SetStateAction<string> }
   }) => {
      setSelectedComponent(e.target.value)
   }

   const renderSelectedComponent = () => {
      switch (selectedComponent) {
         case 'A':
            return <Resident />
         case 'B':
            return <Traveler />
         case 'C':
            return <User />
         default:
            return null
      }
   }

   return (
      <div className='p-8'>
         <h1 className='mb-8 text-3xl font-bold'>Dashboard</h1>
         <div className='mb-4 flex items-center'>
            <label htmlFor='component-select' className='mr-2'>
               Select Component:
            </label>
            <select
               id='component-select'
               value={selectedComponent}
               onChange={handleComponentChange}
               className='rounded border-gray-400 px-3 py-2'
            >
               <option value='A'>Resident</option>
               <option value='B'>Traveler</option>
               <option value='C'>User</option>
            </select>
         </div>
         {renderSelectedComponent()}
      </div>
   )
}

export default Dashboard
