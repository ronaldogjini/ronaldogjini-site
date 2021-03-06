import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import PortfolioWork from '../components/Portfolio/PortfolioWork'


const projects = [
    {
        title: "NaldoTech",
        description: "A tech platform focused on the latest gadgets",
        logo: "https://www.naldotech.com/wp-content/uploads/2020/07/naldotech-logo-nt.png",
        logoAlt: "naldotech logo",
        cover: "../../naldo.png",
        coverAlt: "NaldoTech cover",
        technologies: ["Wordpress", "Java Spring"],
        link: "https://www.naldotech.com"
    },
    {
        title: "Point",
        description: "A fully featured hotel booking engine",
        logo: "../../../point-logo.webp",
        logoAlt: "Point Hotel logo",
        cover: "../../../point.webp",
        coverAlt: "Point hotel cover",
        technologies: ["VueJS", "Laravel"],
        link: "https://master.ddhjc7cf0obl7.amplifyapp.com"

    },
    {
        title: "NLP Language Identifier",
        description: "A complete language identifier using the N-GRAM model",
        logo: "../../../nlp-logo.webp",
        logoAlt: "NLP Language Identifier logo",
        cover: "../../../nlp.webp",
        coverAlt: "NLP Language Identifier cover",
        technologies: ["React", "Java", "Spring"],
        link: "https://www.whatlanguageisthistext.com"
    },
    {
        title: "MusicTube",
        description: "A fully featured music player",
        logo: "../../../musictube-logo.png",
        logoAlt: "MusicTube logo",
        cover: "../../../musictube.webp",
        coverAlt: "MusicTube cover",
        technologies: ["React", "Redux"],
        link: "https://main.d2dnssnz0oynxh.amplifyapp.com/"

    },
    {
        title: "Student Center",
        description: "Student Center Mobile App",
        logo: "../../../student-logo.webp",
        logoAlt: "Student center logo",
        cover: "../../../student.webp",
        coverAlt: "Student center cover",
        technologies: ["Java"]
    },
    {
        title: "Bear PawBakery",
        description: "The first creamer company in the United Kingdom with the highest quality",
        logo: "../../../bearpawbakery-logo.webp",
        logoAlt: "Bear PawBakery logo",
        cover: "../../../bearpawbakery.webp",
        coverAlt: "Bear PawBakery cover",
    }
]

function Portfolio() {

    return (
        <Layout>
            <SEO
                title="Ronaldo Gjini - Portfolio"
                description="Software Projects developed by Ronaldo Gjini."
            />
            <div className="max-w-full">
                <div className="flex flex-col justify-center h-40 max-w-screen-xl px-4 mx-auto">
                    <h1 className="max-w-screen-sm text-6xl font-bold mb-4">Recent Work</h1>
                    <p className="">WEB ??? MOBILE ??? UX ??? BRANDING </p>
                </div>

                <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 mx-auto md:space-x-8">
                    {projects.map(project => <PortfolioWork project={project} />)}
                </div>
            </div>



        </Layout>
    )
}

export default Portfolio
