import axios from 'axios'
import { LoginUser } from '../global/types'
import { API_URL } from './apiURL'
// import { useAtom } from 'jotai'
// import { tokenJWT } from '../global/logged'

// It is a sign in function that takes data as a parameter and returns the result
// results contain only the authentication token
const signIn = async (data: LoginUser) => {
   const response = await axios.post(`${API_URL}/users/login`, data, {
      headers: {
         'Content-Type': 'application/json',
      },
   })
   return response.data
}

// const getUserInfoById = async (userId: string) => {
//    const [token] = useAtom(tokenJWT)
//    try {
//       const config = {
//          headers: {
//             Authorization: `Bearer ${token}`,
//          },
//       }

//       const response = await axios.get(`${API_URL}/users/${userId}`, config)

//       return response.data
//       // eslint-disable-next-line
//    } catch (err: any) {
//       console.log(err)
//       throw new Error(err)
//    }
// }

// export all module
export {
  signIn
}

