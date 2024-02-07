import * as Popover from '@radix-ui/react-popover';
import LoginPopUp from './LoginPopUp';
import { useState } from 'react';
import logo from '../assets/images/logo.jpg'
const Navbar = () => {
    const [loginTab, setLoginTab] = useState(false);
    function signinclick(){
        if(loginTab)
        setLoginTab(false)
        else
        setLoginTab(true)
    }
    return (
        <>
        
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="uppercase flex text-gray-900 font-black text-3xl">
                    <img src={logo} className="w-9 h-9 rounded-lg mr-2"alt="" />
                    <a href="/">BLACKINFO</a>
                </div>
                <div className="flex items-center">
                    <nav className="font-sen text-gray-800   uppercase text-lg lg:flex items-center hidden">
                        <a href="/identification" className="py-2 px-6 flex">
                            Identification
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Analysis
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Treatment
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Contact
                        </a>
                        <button className="py-1 px-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={signinclick}
                        >
                            <p className="py-2 px-6 flex">
                                SIGN IN
                            </p>
                        </button>
                    </nav>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="lg:hidden flex flex-col ml-4">
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            </button>
                        </Popover.Trigger>
                        <Popover.Content className="PopoverContent z-50" sideOffset={5}>
                            <div className="flex flex-col text-start space-x-4 z-0 bg-gray-800 rounded-lg lg:hidden" >
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Identification</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Analysis</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign In</a>
                                
                            </div>
                        </Popover.Content>
                    </Popover.Root>
                </div>
            </div>
        </header>
    {loginTab && <LoginPopUp toggleState={signinclick}/>}
        </>
    )
}

export default Navbar