import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Introduction() {
    return (
        <div id="about" className="max-w-screen-lg mx-auto py-16 ">
            <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-screen-lg ">
                <h2 className="text-5xl text-center uppercase font-bold md:pb-8 mx-auto">Who Am I?</h2>
                <div className="md:flex items-center px-4 md:px-0">
                    <div>
                        <div className="uppercase tracking-wide text-4xl text-indigo-500 font-semibold text-center md:text-left py-16">I am a software developer and designer.</div>
                    </div>
                    <div className="md:flex-shrink-0 px-4">
                        <StaticImage
                            className="object-cover fancy-border"
                            src="../../images/introduction/programming.webp"
                            alt="Ronaldo Gjini programming"
                            placeholder="dominantColor"
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
