import React from 'react'
import {Link,NavLink} from 'react-router-dom'


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-blue-200 border-gray-200 px-4 lg:px-6 py-2.5 shadow-lg ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
                            className="mr-3 h-12 size- "
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <NavLink
                            to="login"
                            className="text-white bg-blue-700 hover:bg-green-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            LOG IN
                        </NavLink>
                        <NavLink
                            to="Signup"
                            className="text-white bg-blue-700 hover:bg-green-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            SIGN UP
                        </NavLink>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive?"text-blue-900":"text-gray-700"} border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-grey-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive?"text-blue-900":"text-gray-700"} border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-grey-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                    ${isActive?"text-blue-900":"text-gray-700"} border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-grey-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}