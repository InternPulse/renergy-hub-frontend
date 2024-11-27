import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = () => {
    return (
        <nav className="bg-white flex h-24 justify-between items-center px-20">
            <div>
                <h1 className="font-bold text-[32px]">Security</h1>
            </div>
            <div className="flex gap-1 items-center shadow-sm rounded-md bg-[#E6E6E6]">
                <Input className="border-none outline-none px-20 bg-transparent"/>
                <img src="/searchnav.png" alt="search" />
            </div>
            <div className="flex gap-2 items-center">
                <img src="/bell.png" alt="bell" />
                <Avatar>
                    <AvatarImage src="/avatar3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2>Frank</h2>
                <img src="/downicon.png" alt="downicon" />
            </div>
        </nav>
    )
}

export default Navbar
