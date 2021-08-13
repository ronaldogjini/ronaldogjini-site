import React from 'react'
import { ChipIcon } from '@heroicons/react/outline'
import { CloudUploadIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'




function PortfolioExamples() {
    return (
        <div id="technologies" className="bg-gray-50 pt-4 pb-16 ">

            <div data-sal="slide-up" data-sal-duration="700">
                <h2 className="text-center text-5xl my-8 font-bold">Latest Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:space-x-8 px-8 ">
                    <div className="bg-white rounded-xl shadow-md flex items-center my-8">
                        <div className="flex w-full">
                            <div className="px-4 pt-8 w-full md:w-1/2">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pb-8">Wordpress</div>
                                <a href="https://www.naldotech.com" target="_blank" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                    NaldoTech
                                </a>
                                <p className="block mt-2 text-xl leading-tight font-medium text-gray-500">
                                    Tech Blog
                                </p>
                                <ChipIcon className="h-8 text-blue-300 mt-12" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <img
                                    className="h-64 w-full object-cover rounded-r-xl flex-shrink-0"
                                    src="../../../naldo.png"
                                    alt="NaldoTech"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md flex items-center my-8">
                        <div className="flex w-full">
                            <div className="px-4 pt-8 w-full md:w-1/2">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pb-8">Java</div>
                                <a href="https://www.whatlanguageisthistext.com/" target="_blank" target="_blank" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                    NLP
                                </a>
                                <p className="block mt-2 text-xl leading-tight font-medium text-gray-500">
                                    AI Processor
                                </p>
                                <CloudUploadIcon className="h-8 text-blue-300 mt-12" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <img
                                    className="h-64 w-full object-cover rounded-r-xl"
                                    src="../../../nlp.webp"
                                    alt="What Language Is This Text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md flex items-center my-8">
                        <div className="flex w-full">
                            <div className="px-4 pt-8 w-full md:w-1/2">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pb-8">VUE Javascript</div>
                                <p className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                    Point
                                </p>
                                <p className="block mt-2 text-xl leading-tight font-medium text-gray-500">
                                    Hotel Booking
                                </p>
                                <HomeIcon className="h-8 text-blue-300  mt-12" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <img
                                    className="h-64 w-full object-cover rounded-r-xl"
                                    src="../../../point.webp"
                                    alt="Hotel Booking Engine"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default PortfolioExamples
