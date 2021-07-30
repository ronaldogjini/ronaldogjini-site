import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function Technologies() {
    return (
        <div id="experience" className="custom-background py-16 px-4">
            <div className="max-w-screen-lg mx-auto">
                <div className="max-w-lg mx-auto overflow-hidden md:max-w-screen-lg">
                    <p className="text-2xl text-white">Throughout my life I have worked with various platforms and technologies.<br />
                        I have experience in creating custom platforms based on customers' requirements on the latest and most popular technologies in React, Vue, Laravel and more.
                    </p>
                </div>

                <div className="hidden md:flex justify-around ">
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="React"
                        src="../../images/introduction/react.webp"
                        placeholder="blurred"
                        layout="fixed"
                        height={210}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/laravel.webp"
                        placeholder="blurred"
                        layout="fixed"
                        height={210}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Wordpress"
                        src="../../images/introduction/wordpress.webp"
                        placeholder="blurred"
                        layout="fixed"
                        height={210}
                    />
                </div>
                <div className="flex md:hidden">
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="React"
                        src="../../images/introduction/react.webp"
                        placeholder="dominantColor"
                        height={100}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/laravel.webp"
                        placeholder="dominantColor"
                        height={100}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Wordpress"
                        src="../../images/introduction/wordpress.webp"
                        placeholder="dominantColor"
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Technologies
