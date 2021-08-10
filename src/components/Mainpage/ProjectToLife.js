import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Introduction() {
    return (
        <div id="about" className=" py-4 md:py-16 max-w-screen-xl mx-auto">
            <div className="min-w-screen-xl mx-auto bg-white rounded-xl overflow-hidden ">
                <div className="md:flex items-center px-4 md:px-0">
                    <div data-sal="slide-up" data-sal-duration="700" className="md:w-2/5">
                        <div className="tracking-wide text-6xl text-red-500 font-bold text-center md:text-left py-8">
                            Bring your <span className="text-black">project</span> to life.
                        </div>
                        <p className="text-xl text-gray-700 text-center md:text-left">
                            Do you have a <strong>project idea</strong> in mind and want to turn it into a reality? Or have you already designed everything, and want a <strong>working software?</strong>
                        </p>
                    </div>
                    <div className="px-4 py-16 md:py-0 md:flex md:w-3/5 justify-end">
                        <StaticImage
                            className="object-cover"
                            src="../../images/introduction/asset1.webp"
                            alt="Ronaldo Gjini programming"
                            placeholder="dominantColor"
                            width={650}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
