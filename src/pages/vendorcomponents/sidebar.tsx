import { Award, Menu, Dock, House, Mail, Package, PanelsTopLeft, PieChart, ShoppingBag, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png" 

const SIDEBAR_ITEMS = [
  {
    name: 'Dashboard', icon: House, color:'black', href:'/'
  },
  {
    name: 'Report', icon: PieChart, color:'black', href:'/report'
  },
  {
    name: 'Products', icon: Package, color:'black', href:'/orders'
  },
  {
    name: 'Offers', icon: Award, color:'black', href:'/offer'
  },
  {
    name: 'Inventory', icon: Dock, color:'black', href:'/orders'
  },
  {
    name: 'Orders', icon: ShoppingBag, color:'black', href:'/orders'
  },
  {
    name: 'Payments', icon: PanelsTopLeft, color:'black', href:'orders/'
  },
  {
    name: 'Messages', icon: Mail, color:'black', href:'/orders'
  },
  {
    name: 'Customers', icon: User, color:'black', href:'/orders'
  }
]

const SIDEBAR_BOTTOM = [
  {
    name: 'Settings', icon: Settings, color:'black', href:'/settings'
  },
  {
    name: 'Logout', icon: LogOut, color:'black', href:'/orders'
  }
]
export const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-40" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 170 : 80 }}
		>
      <img 
        className={`h-12 w-12 mt-6 ml-6 ${isSidebarOpen ? "w-auto h-20" : "w-8 h-8"}`}
        src={logo}
        alt="logo" />

			<div className='h-full  bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-green-400 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

        <div className="flex flex-col justify-between">
          <nav className='flex-grow mb-4'>
					{SIDEBAR_ITEMS.map((item, index) => (
						<Link key={index} to={item.href}>
							<motion.div className='flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>

        <nav className="flex-grow mt-6">
          {SIDEBAR_BOTTOM.map((item, index) => (
            <Link key={index} to={item.href}>
							<motion.div className='flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors '>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
          ))}
      </nav>
        </div>
				
			</div>
		</motion.div>
  )
}
