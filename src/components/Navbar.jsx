import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return(
        <>

        <nav className='bg-gray-800 flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base'>
            <ul className='flex items-center gap-6 text-gray-200'>
                <li className='font-bold text-xl'>
                    Shopi
                </li>
                <li>
                    All
                </li>
                <li>
                    Clothes
                </li>
                <li>
                    Electronics
                </li>
                <li>
                    Toys
                </li>
                <li>
                    Others
                </li>
            </ul>
            <ul className='flex items-center gap-6 text-gray-200'>
                <li>
                    <p>My order</p>
                </li>
                <li>
                    <p>My account</p>
                </li>
                <li>
                    <p>Sign In</p>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>

        </>
    )
}