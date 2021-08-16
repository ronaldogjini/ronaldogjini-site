import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRightIcon } from '@heroicons/react/solid'



const companies = [
    {
        companyName: "NaldoTech",
        companyDescription: "Tech site focused on the latest news and guides about technology.",
        companyURL: "https://www.naldotech.com",
        companyLogo: "/img/projects/naldo.png"
        // companyLogo: "https://www.naldotech.com/wp-content/uploads/2020/07/naldotech-main-logo.png"

    },
    {
        companyName: "Point Hotel Management",
        companyDescription: "A fully featured hotel management suite with a custom booking engine, room management, and houskeeping panel.",
        companyURL: "https://master.ddhjc7cf0obl7.amplifyapp.com/",
        companyLogo: "/img/projects/point.webp"
    },
    {
        companyName: "Bear PawBakery",
        companyDescription: "The first creamer company in the United Kingdom with the highest quality.",
        companyURL: "https://www.bearpawbakery.com/",
        companyLogo: "/img/projects/bearpawbakery.webp"
    },
    {
        companyName: "LifeMagazine",
        companyDescription: "A lifestyle magazine for everyone.",
        companyURL: "https://lifemagazine.al/",
        companyLogo: "/img/projects/lifemagazine.webp"
    }
    ,
    {
        companyName: "Chunkzone",
        companyDescription: "Chunkzone is an online technology platform that provides downloading services",
        companyURL: "https://lifemagazine.al/",
        companyLogo: "/img/projects/chunkzone.webp"
    }

]

function Portfolio() {

    return (
        <Layout>
            <SEO
                title="Ronaldo Gjini | Portfolio"
                description="Software Projects developed by Ronaldo Gjini."
            />
            <div className="max-w-full">
                <div className="flex flex-col justify-center h-40 max-w-screen-xl px-4 mx-auto">
                    <h1 className="max-w-screen-sm text-6xl font-bold mb-4">Recent Work</h1>
                    <p className="">WEB • MOBILE • UX • BRANDING </p>
                </div>


                <div className="md:flex max-w-screen-xl mx-auto pt-8">
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/naldo.png"
                            alt="NaldoTech"
                            width={1000}
                        />
                        <div className="pt-8">
                            <h2 className="text-4xl  tracking-wide text-black font-bold">NaldoTech</h2>
                            <p className="text-gray-500 text-xl py-4">Tech site focused on the latest news and guides about technology.</p>
                            <div className=" text-blue-500 font-semibold">
                                <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://www.naldotech.com">Visit site</a>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/nlp.webp"
                            alt="NLP Language Identifier"
                            width={1000}
                        />
                        <div className='pt-8'>
                            <h2 className="text-4xl  tracking-wide text-black font-bold">NLP Language Identifier</h2>
                            <p className="text-gray-500 text-xl py-4">A complete language identifier using the N-GRAM model.</p>
                            <div className=" text-blue-500 font-semibold">
                                <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://www.whatlanguageisthistext.com/">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex max-w-screen-xl mx-auto">
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/point.webp"
                            alt="Point Hotel Management"
                            width={1000}
                        />
                        <div className='pt-8'>
                            <h2 className="text-4xl  tracking-wide text-black font-bold">Point Hotel Management</h2>
                            <p className="text-gray-500 text-xl py-4">A fully featured hotel management suite with a custom booking engine, room management, and houskeeping panel.</p>
                            <div className=" text-blue-500 font-semibold">
                                <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://master.ddhjc7cf0obl7.amplifyapp.com/">Visit site</a>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/student.webp"
                            alt="Student Center Mobile App"
                            width={1000}
                        />
                        <div className='pt-8'>
                            <h2 className="text-4xl tracking-wide text-black font-bold">Student Center</h2>
                            <p className="text-gray-500 text-xl py-4">Mobile app keeping track of students' performance.</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex max-w-screen-xl mx-auto">
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/bearpawbakery.webp"
                            alt="Bear Paw Bakery"
                            width={1000}
                        />
                        <div className='pt-8'>
                            <h2 className="text-4xl  tracking-wide text-black font-bold">Bear PawBakery</h2>
                            <p className="text-gray-500 text-xl py-4">The first creamer company in the United Kingdom with the highest quality.</p>
                            <div className=" text-blue-500 font-semibold">
                                <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://www.bearpawbakery.com/">Visit site</a>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-16 md:w-1/2">
                        <StaticImage
                            className="w-full"
                            src="../images/projects/lifemagazine.webp"
                            alt="Life Magazine Albania"
                            width={1000}
                        />
                        <div className='pt-8'>
                            <h2 className="text-4xl  tracking-wide text-black font-bold">LifeMagazine</h2>
                            <p className="text-gray-500 text-xl py-4">A lifestyle magazine for everyone.</p>
                            <div className=" text-blue-500 font-semibold">
                                <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://lifemagazine.al/">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </Layout>
    )
}

export default Portfolio
