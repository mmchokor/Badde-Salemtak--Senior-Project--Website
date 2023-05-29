import { Link } from 'react-router-dom'

const About = () => {
   return (
      <div className='min-h-screen items-left flex flex-col bg-gray-100 px-4 py-8 font-interR sm:px-6 md:px-8 lg:px-10'>
         <h1 className='mb-5 text-4xl font-bold text-salemtak'>About Us</h1>
         <p className='mb-8 text-lg text-gray-600'>
            Our project aims to solve the issue of obtaining various products
            that are not readily available in Lebanon. We provide a platform for
            frequent flyers and people who occasionally visit Lebanon to get in
            touch with people who live there to get what they want or need.
         </p>
         <h2 className='mb-4 text-2xl font-bold  text-salemtak'>
            Problem Statement
         </h2>
         <p className='mb-8 text-lg text-gray-600'>
            Private firms that specialize in postal and shipping services have
            taken control of everything related to this field in Lebanon, since
            the government does not oversee it. Shipping expenses from and to
            Lebanon are quite high, and these firms are notorious for
            mishandling and delaying shipments.
         </p>
         <h2 className='mb-4 text-2xl font-bold  text-salemtak'>Our Goal</h2>
         <p className='mb-8 text-lg text-gray-600'>
            Our goal is to solve all the issues mentioned in the problem
            statement section by developing an application that will allow
            Lebanese residents to contact people who are flying to Lebanon so
            that they can bring the products that the residents want. Our
            application will offer many features for paying and reviewing the
            residents and the flyers.
         </p>
         <h2 className='mb-4 text-2xl font-bold  text-salemtak'>
            System and Domain Review
         </h2>
         <p className='mb-8 text-lg text-gray-600'>
            Our application serves several purposes. It will display a list of
            people who will be arriving in Lebanon in the next days or weeks,
            and they will be required to upload an image of their ticket to
            verify their travel dates. It will also include a list of products
            that residents of Lebanon have requested from outside sources. Users
            will be able to browse through all of the listings by defining the
            item's urgency level, the category it belongs to, the nation from
            which they want the goods, and other relevant qualities.
            <Link to={'/admin/dashboard'} className='text-gray-600'>
               admin
            </Link>
         </p>
      </div>
   )
}

export default About
