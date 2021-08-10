import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Transition } from "@headlessui/react";


function Navbar(props) {

    const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }`
    )

    const { title } = data.site.siteMetadata

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-black sticky top-0 z-50">
            <div className="mx-auto md:justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:justify-center items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <p className="text-white font-bold text-xl">
                                <Link to="/">Ronaldo Gjini</Link>
                            </p>
                        </div>
                        <div className="hidden md:block ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" to="/portfolio">Portfolio</Link>

                                <a
                                    href="/#about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="/#technologies"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Experience
                                </a>
                                {
                                    // window.location.pathname !== "/contact" && 
                                    <button className="py-2 px-4 ml-3 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700">
                                        <Link to="/contact">Hire me</Link>
                                    </button>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            <Link to="/portfolio" onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>

                            <a
                                onClick={() => setIsOpen(!isOpen)}
                                href="/#technologies"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Experience
                            </a>

                            <a
                                onClick={() => setIsOpen(!isOpen)}
                                href="/#about"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </a>

                            <button className="py-2 px-4 ml-3 font-medium rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700">
                                <Link onClick={() => setIsOpen(!isOpen)} to="/contact">Hire me</Link>
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar
