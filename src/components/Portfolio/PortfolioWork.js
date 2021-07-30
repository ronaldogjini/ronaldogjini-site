import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'



function PortfolioWork(props) {
    return (
        <div className=" py-8 z-10">
            <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                <div className="lg:flex justify-between items-center">
                    <div className='p-8 space-y-4'>
                        <h2 className="text-5xl  tracking-wide text-black font-bold">{props.company.companyName}</h2>
                        <p className="text-gray-500 text-2xl">{props.company.companyDescription}</p>
                        <div className=" text-blue-500 font-semibold">
                            <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href={props.company.companyURL}>Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                        </div>
                    </div>
                    <div class="md:flex-shrink-0  zoomTwo">
                        <img class="w-full  md:h-full " src={props.company.companyLogo} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PortfolioWork
