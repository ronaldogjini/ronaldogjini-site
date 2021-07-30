import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Welcome() {
    return (
        <div className="max-w-screen-xl mx-auto pt-5 md:pt-20">
            <div className="md:flex px-4 items-center justify-center">
                <div className="text-center md:text-left">
                    <h1 className="max-w-screen-sm text-5xl text-white font-extrabold mb-4 ">Hello! I am Ronaldo, a Freelance Developer</h1>
                    <button className="bg-red-500 hover:bg-red-700 rounded-xl text-white px-4 py-2 my-8 font-bold mt-5 z-auto">
                        <Link to="/contact">Contact me</Link>
                    </button>
                </div>
                <div className="flex justify-center">
                    <StaticImage
                        placeholder="dominantColor"
                        width={400}
                        height={400}
                        className="max-h-96 rounded-full z-50"
                        src="../../images/introduction/profile.webp"
                        alt="Ronaldo Gjini">
                    </StaticImage>
                </div>
            </div>
        </div>
    )
}

export default Welcome
