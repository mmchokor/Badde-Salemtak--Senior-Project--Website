import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

const App = () => {
   return (
      <>
         <Router>
            <Navbar />
            <main className='min-h-[90vh]'>
               <Routes>
                  <Route path='/' Component={Home} />
                  <Route path='/about' Component={About} />
                  <Route path='/contact' Component={Contact} />
                  <Route path='/privacy' Component={Privacy} />
               </Routes>
            </main>
            <Footer />
         </Router>
      </>
   )
}

export default App
