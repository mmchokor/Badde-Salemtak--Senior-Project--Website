// import axios from 'axios'
// import { LoginUser, UserResponse } from '../global/types'
// import { API_URL } from './apiURL'
// // import { useAtom } from 'jotai'
// // import { tokenJWT } from '../global/logged'

// // It is a sign in function that takes data as a parameter and returns the result
// // results contain only the authentication token
// const signIn = async (data: LoginUser) => {
//    const response = await axios.post(`${API_URL}/users/login`, data, {
//       headers: {
//          'Content-Type': 'application/json',
//       },
//    })
//    return response.data
// }

// // get all users
// // eslint-disable-next-line
// const getAllUsers = async (token: string): Promise<any> => {
//    const response: UserResponse = await axios.get('/api/users/getAll', {
//       headers: {
//          Authorization: `Bearer ${token}`,
//       },
//    })
//    return response.data
// }

// const deleteUserById = async ({
//    id,
//    token,
// }: {
//    id: string
//    token: string
// }): Promise<string> => {
//    // eslint-disable-next-line
//    const response: any = await axios.delete(`/api/users/${id}`, {
//       headers: {
//          Authorization: `Bearer ${token}`,
//       },
//    })
//    return 'success'
// }

// // export all module
// export { deleteUserById, getAllUsers, signIn }

