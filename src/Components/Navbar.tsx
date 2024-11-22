
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import profile_icon from '../assets/profile_icon.png'
import search_icon from '../assets/search_icon.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 mx-4 sm:mx-[10%]'>
    <img className='w-[80px] h-[60px] cursor-pointer' src={logo} alt="" />
    <ul className='hidden md:flex items-start gap-5 font-medium '>
    <li className='cursor-pointer'>Who We Are</li>
    <li className='cursor-pointer'>Products</li>
    <li className='cursor-pointer'>Features</li>
    <li className='cursor-pointer'>Contact US</li>
    </ul>
    <div className='flex items-center gap-6'>
        <img className='cursor-pointer' src={profile_icon} alt="profile" />
        <img className='cursor-pointer' src={search_icon} alt="search" />
        <img className='cursor-pointer' src={cart_icon} alt="cart" />
    </div>
    </div>
  )
}

export default Navbar