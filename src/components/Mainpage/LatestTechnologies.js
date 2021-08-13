import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function Technologies() {
    return (
        <div className="pb-16 px-4 bg-gray-50">
            <div data-sal="slide-up" data-sal-duration="700" className="max-w-screen-xl mx-auto">
                <p className="tracking-wide text-6xl text-black font-bold text-center py-8">
                    Latest
                    <span className="text-red-500"> technologies</span> and
                    <span className="text-red-500"> frameworks</span>.
                </p>
                <p className="tracking-wide text-2xl text-center text-gray-500">
                    Turn your ideas into projects quickly. Enter the market with a fast and responsive project build on the latest technologies.
                </p>
                <div className="hidden md:flex justify-around items-center ">
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="React"
                        src="../../images/introduction/react.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={100}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/vue.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={70}
                    />

                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/java.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={100}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/spring.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={50}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Laravel"
                        src="../../images/introduction/shopify.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={50}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Wordpress"
                        src="../../images/introduction/gatsby.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={50}
                    />
                    <StaticImage
                        className="mx-auto mt-16"
                        alt="Wordpress"
                        src="../../images/introduction/wordpress.png"
                        placeholder="blurred"
                        layout="fixed"
                        height={50}
                    />
                </div>
            </div>
        </div>
    )
}

export default Technologies
