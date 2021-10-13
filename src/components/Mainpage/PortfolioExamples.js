import React from 'react'
import PortfolioElement from './PortfolioElement'
import { Link } from 'gatsby'

const projects = [
    {
        title: "NaldoTech",
        description: "Tech platform",
        logo: "https://www.naldotech.com/wp-content/uploads/2020/07/naldotech-logo-nt.png",
        logoAlt: "naldotech logo",
        cover: "../../naldo.png",
        coverAlt: "NaldoTech cover",
        technologies: ["Wordpress, Java Spring"]

    },
    {
        title: "Point",
        description: "Hotel Booking Engine",
        logo: "../../../point-logo.webp",
        logoAlt: "Point Hotel logo",
        cover: "../../../point.webp",
        coverAlt: "Point hotel cover",
        technologies: ["VueJS, Laravel"]

    },
    {
        title: "MusicTube",
        description: "A fully featured music player",
        logo: "../../../musictube-logo.png",
        logoAlt: "MusicTube logo",
        cover: "../../../musictube.webp",
        coverAlt: "MusicTube cover",
        technologies: ["React, Redux,"]


    }
]


function PortfolioExamples() {
    return (
        <div id="technologies" className="bg-gray-50 pt-4 pb-16 ">

            <div data-sal="slide-up" data-sal-duration="700">
                <h2 className="text-center text-5xl my-8 font-bold">Latest Projects</h2>
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 px-8 ">
                    {projects.map(project => <PortfolioElement project={project} />)}
                </div>
                <div className=" text-center">
                    <button className="bg-red-500 text-lg hover:bg-red-700 rounded-xl text-white px-6 py-2 font-semibold mt-5 z-auto">
                        <Link to="/portfolio">More projects</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PortfolioExamples
