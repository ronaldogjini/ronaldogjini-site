import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Welcome() {
    return (
        <div className="max-w-screen-xl mx-auto pt-5 md:py-10">
            <div className="md:flex px-4 items-center h-full">
                <div data-sal="slide-up" data-sal-duration="700" className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold mb-4 ">Hello! I am <span className="text-red-500">Ronaldo</span>, a Freelance Developer</h1>
                    <p className="text-gray-700 text-lg pt-4">I am a developer with a passion for creating new and <strong>exciting projects</strong>.
                        Each stage of product development is important, starting from the first conception, <strong>designing</strong> the first
                        sketch, all the way to creating the final <strong>working product</strong>.</p>

                    <p className="text-xl pt-8">Start your <span className="     font-bold">blog</span>
                        , <span className=" font-bold">online shop</span> or <span className=" font-bold">website</span> right now.</p>
                    <button className="bg-red-500 text-lg hover:bg-red-700 rounded-xl text-white px-6 py-2 font-semibold mt-5 z-auto">
                        <Link to="/contact">Contact me</Link>
                    </button>
                </div>
                <div className="flex md:w-1/2 justify-center md:justify-end py-8">
                    <StaticImage
                        placeholder="dominantColor"
                        width={400}
                        height={400}
                        className="max-h-96 rounded-full"
                        src="../../images/introduction/profile.webp"
                        alt="Ronaldo Gjini">
                    </StaticImage>
                </div>
            </div>
        </div>
    )
}

export default Welcome
