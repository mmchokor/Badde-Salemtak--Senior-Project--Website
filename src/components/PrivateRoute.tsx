import { useAtom } from 'jotai'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../global/logged'

const PrivateRoute = () => {
   const [isLogged] = useAtom(isLoggedIn)

   return isLogged ? <Outlet /> : <Navigate to='/admin' />
}

export default PrivateRoute
