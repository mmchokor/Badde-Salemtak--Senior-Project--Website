import { useAtom } from 'jotai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../../global/logged'

interface FormValues {
   email: string
   password: string
}

const Login = () => {
   const navigate = useNavigate()

   const [formValues, setFormValues] = useState<FormValues>({
      email: '',
      password: '',
   })
   const [isLogged, setIsLogged] = useAtom(isLoggedIn)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const { email, password } = formValues

      if (
         email === import.meta.env.VITE_ADMIN_USER &&
         password === import.meta.env.VITE_ADMIN_PASS
      ) {
         setIsLogged(true)
         navigate('/admin/dashboard')
      } else {
         console.log('Invalid email or password')
      }
   }

   if (isLogged) {
      navigate('/admin/dashboard')
   }

   return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
         <div className='rounded bg-white p-8 shadow-xl'>
            <h1 className='mb-4 text-2xl font-bold'>Login</h1>
            <form onSubmit={handleSubmit}>
               <div className='mb-4'>
                  <label
                     htmlFor='email'
                     className='mb-2 block font-bold text-gray-700'
                  >
                     Email
                  </label>
                  <input
                     type='email'
                     id='email'
                     name='email'
                     value={formValues.email}
                     onChange={handleChange}
                     className='w-full rounded border-gray-400 px-3 py-2'
                     required
                  />
               </div>
               <div className='mb-4'>
                  <label
                     htmlFor='password'
                     className='mb-2 block font-bold text-gray-700'
                  >
                     Password
                  </label>
                  <input
                     type='password'
                     id='password'
                     name='password'
                     value={formValues.password}
                     onChange={handleChange}
                     className='w-full rounded border-gray-400 px-3 py-2'
                     required
                  />
               </div>
               <button
                  type='submit'
                  className='rounded bg-blue-500 px-4 py-2 text-white'
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login
