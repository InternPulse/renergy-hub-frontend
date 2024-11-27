import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = () => {
    return (
        <nav className="bg-white flex h-24 justify-between items-center 
        pl-[60px] pr-[10px] sm:pl-[80px] sm:pr-[40px] md:px-2 lg:px-10 xl:px-20">
            <div>
                <h1 className="font-bold text-[20px] sm:text-[24px] lg:text-[32px]">Security</h1>
            </div>
            <div className="flex gap-1 mx-3 md:mx-0 items-center shadow-sm rounded-md bg-[#E6E6E6]">
                <Input className="border-none outline-none md:px-[0px] lg:px-[50px] xl:px-20 bg-transparent"/>
                <img src="/searchnav.png" alt="search" />
            </div>
            <div className="flex gap-2 md:gap-2 items-center">
                <img className="hidden md:block" src="/bell.png" alt="bell" />
                <Avatar>
                    <AvatarImage src="/avatar3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="hidden md:block">Frank</h2>
                <img className="hidden lg:block" src="/downicon.png" alt="downicon" />
            </div>
        </nav>
    )
}

export default Navbar
