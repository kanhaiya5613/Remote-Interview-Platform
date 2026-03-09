import { Link } from 'react-router'
import { BookOpenIcon, LayoutDashboard, Star } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react';
function Navbar() {
    const isActive = (path) => location.pathname === path;
    return <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="ma-auto p-4 flex items-center justify-between">
            {/* LOGO */}
            <Link to={"/"}
                className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                <div>
                    <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                        <Star className="sixe-6 text-white" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                        HireCandy
                    </span>
                    <span className="text-xs text-base-content/60 font-medium -mt-1">Hire Talent</span>
                </div>
            </Link>

            <div className='flex items-center gap-1'>
                <Link to={"/problems"}
                    className={`px-4 py-2.5 rounded-lg transition-all duration-150 ${isActive("/problems") ? " bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}>
                    <div className='flex items-center gap-x-2.5'>
                        <BookOpenIcon className='size-4' />
                        <span className='font-medium hidden sm:inline'>Problems</span>
                    </div>


                </Link>
                <Link to={"/dashboard"}
                    className={`px-4 py-2.5 rounded-lg transition-all duration-150 ${isActive("/dashboard") ? " bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}>
                    <div className='flex items-center gap-x-2.5'>
                        <LayoutDashboard className='size-4' />
                        <span className='font-medium hidden sm:inline'>Dashboard</span>
                    </div>


                </Link>
                <div className='ml-4 mt-t'>
                     <UserButton/>
                </div>
               
            </div>
        </div>

    </nav>
}

export default Navbar