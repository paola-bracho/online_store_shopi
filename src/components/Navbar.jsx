import { CartWidget } from './CartWidget';
import { Layout } from './layout/layout';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <>

        <nav className='bg-gray-800 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base'>
            <ul className='flex items-center gap-6 text-gray-200'>

                <li className='font-bold text-xl'>Shopi</li>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/women">Women</Link></li>
                <li> <Link to="/men">Men</Link></li>
                <li> <Link to="#">Jewelery</Link></li>
                <li> <Link to="#">Electronics</Link></li>

            </ul>

            <ul className='flex items-center gap-6 text-gray-200'>

                <li><a href="#">My order</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#"><CartWidget /></a></li>

            </ul>      
        </nav>         
        </>
    )
}