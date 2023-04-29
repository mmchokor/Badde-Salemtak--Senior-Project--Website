import { useAtom } from 'jotai'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../api/userAPI'
import { isLoggedIn, tokenJWT } from '../../global/logged'

interface FormValues {
   email: string
   password: string
}

const Login = () => {
   const navigate = useNavigate()

   const [, setToken] = useAtom(tokenJWT)
   const [formValues, setFormValues] = useState<FormValues>({
      email: '',
      password: '',
   })
   const [isLogged, setIsLogged] = useAtom(isLoggedIn)

   const { mutate, isLoading } = useMutation(signIn, {
      onSuccess: (data) => {
         setToken(data.token)
         setIsLogged(true)
         navigate('/admin/dashboard')
      },
      onError: () => {
         console.log('Invalid email or password')
      },
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const { email, password } = formValues
      mutate({ email, password })
   }

   if (isLogged) {
      navigate('/admin/dashboard')
   }

   if (isLoading) {
      return <div>Loading...</div>
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
