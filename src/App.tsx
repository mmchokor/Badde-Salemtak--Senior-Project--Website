import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Dashboard from './pages/admin/Dashboard'
import Login from './pages/admin/Login'

// Create a client
const queryClient = new QueryClient()

const App = () => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Router>
               <Navbar />
               <main className='min-h-[90vh]'>
                  <Routes>
                     <Route path='/' Component={Home} />
                     <Route path='/about' Component={About} />
                     <Route path='/contact' Component={Contact} />
                     <Route path='/privacy' Component={Privacy} />
                     <Route path='/admin/' Component={Login} />
                     <Route path='/admin/dashboard' element={<PrivateRoute />}>
                        <Route
                           path='/admin/dashboard'
                           element={<Dashboard />}
                        />
                     </Route>
                     <Route path='*' element={<NotFound />} />
                  </Routes>
               </main>
               <Footer />
            </Router>
         </QueryClientProvider>
      </>
   )
}

export default App
