import { Scrollbars } from "react-custom-scrollbars-2";
const sidebarMenu = [
    {
        menu:'Dashboard',
        icon:'/home.png'
    },
    {
        menu:'Reports',
        icon:'/pie-chart.png'
    },
    {
        menu:'Products',
        icon:'/box.png'
    },
    {
        menu:'Offers',
        icon:'/award.png'
    },
    {
        menu:'Inventory',
        icon:'/archive.png'
    },
    {
        menu:'Order',
        icon:'/shopping-bag.png'
    },
    {
        menu:'Payment',
        icon:'/layout.png'
    },
    {
        menu:'Messages',
        icon:'/mail.png'
    },
    {
        menu:'Customers',
        icon:'/users.png'
    },
    {
        menu:'Security',
        icon:'/key.png'
    },    {
        menu:'Management',
        icon:'/settings.png'
    }
]

const Sidebar = () => {
return (
    // top logo
    <div className="bg-white  w-[300px] flex flex-col gap-3 justify-center px-5">
        <div className="flex mt-10 flex-col gap-3">
            <div className="w-44 h-44">
                <img className="object-cover" src="/logo.png" alt="logo" />
            </div>
        </div>
        {/* upper menu */}
        <div className="flex -mt-12 flex-col gap-4">
            {sidebarMenu.map((menu,index)=>(
                <div className="flex cursor-pointer hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
                items-center justify-start" key={index}>
                    <img src={menu.icon} alt="icons" />
                    <h2>{menu.menu}</h2>
                </div>
            ))

            }
        </div>
        {/* lower menu */}
        <div className="flex mt-24 flex-col gap-4">
            <div className="cursor-pointer flex hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
                items-center justify-start">
                <img src="/settings.png" alt="settings" />
                <h2>Settings</h2>
            </div>
            <div className="flex cursor-pointer hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
                items-center justify-start">
                <img src="/logout.png" alt="settings" />
                <h2>Log Out</h2>
            </div>
        </div>
    </div>
)
}

export default Sidebar
