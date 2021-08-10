import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Education() {
    return (
        <div className="max-w-screen-xl mx-auto py-16">
            <div id="about" className="max-w-screen-xl mx-auto bg-white rounded-xl overflow-hidden md:max-w-screen-xl">
                <h2 className="text-5xl uppercase font-bold pb-8 mx-auto text-center">Education</h2>
                <div className="md:flex items-center px-8 md:px-0">
                    <div className="pt-8">
                        <div className="uppercase tracking-wide text-4xl text-left text-indigo-500 font-semibold">BSc Computer Science</div>
                        <p className="text-lg text-gray-500 mt-8"> I graduted with a Bachelor Degree in Computer Science at the University of New York Tirana, and now I am working on exiting projects all around the world.
                            You can see some of my latest projects on the next page.</p>
                    </div>
                    <div className="md:flex-shrink-0 px-4 pt-8">
                        <StaticImage
                            className=" object-cover md:w-96 fancy-border-2"
                            src="../images/introduction/unyt.webp"
                            alt="Ronaldo Gjini programming"
                            src="../../images/introduction/unyt.webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
