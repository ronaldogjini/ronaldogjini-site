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
            <div className="max-w-full ">
                <div className="h-48 bg-black flex justify-center items-center">
                    <h1 className="max-w-screen-sm text-6xl text-white font-bold mb-4">Portfolio</h1>
                </div>

                <div className=" py-8 z-10">
                    <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                        <div className="lg:flex justify-between items-center">
                            <div className='p-8 space-y-4'>
                                <h2 className="text-5xl  tracking-wide text-black font-bold">NaldoTech</h2>
                                <p className="text-gray-500 text-2xl">Tech site focused on the latest news and guides about technology.</p>
                                <div className=" text-blue-500 font-semibold">
                                    <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://www.naldotech.com">Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                                </div>
                            </div>
                            <div class="md:flex-shrink-0">
                                <StaticImage
                                    className="w-full md:h-full"
                                    src="../images/projects/naldo.png"
                                    alt="NaldoTech"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div >

                <div className=" py-8 z-10">
                    <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                        <div className="lg:flex justify-between items-center">
                            <div className='p-8 space-y-4'>
                                <h2 className="text-5xl  tracking-wide text-black font-bold">Point Hotel Management</h2>
                                <p className="text-gray-500 text-2xl">A fully featured hotel management suite with a custom booking engine, room management, and houskeeping panel.</p>
                                <div className=" text-blue-500 font-semibold">
                                    <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://master.ddhjc7cf0obl7.amplifyapp.com/">Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                                </div>
                            </div>
                            <div class="md:flex-shrink-0">
                                <StaticImage
                                    className="w-full md:h-full"
                                    src="../images/projects/point.webp"
                                    alt="Point Hotel Management"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div >


                <div className=" py-8 z-10">
                    <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                        <div className="lg:flex justify-between items-center">
                            <div className='p-8 space-y-4'>
                                <h2 className="text-5xl  tracking-wide text-black font-bold">Bear PawBakery</h2>
                                <p className="text-gray-500 text-2xl">The first creamer company in the United Kingdom with the highest quality.</p>
                                <div className=" text-blue-500 font-semibold">
                                    <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://www.bearpawbakery.com/">Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                                </div>
                            </div>
                            <div class="md:flex-shrink-0 ">
                                <StaticImage
                                    className="w-full md:h-full"
                                    src="../images/projects/bearpawbakery.webp"
                                    alt="BearPawBakery"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div >

                <div className=" py-8 z-10">
                    <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                        <div className="lg:flex justify-between items-center">
                            <div className='p-8 space-y-4'>
                                <h2 className="text-5xl  tracking-wide text-black font-bold">LifeMagazine</h2>
                                <p className="text-gray-500 text-2xl">A lifestyle magazine for everyone.</p>
                                <div className=" text-blue-500 font-semibold">
                                    <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://lifemagazine.al">Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                                </div>
                            </div>
                            <div class="md:flex-shrink-0 ">
                                <StaticImage
                                    className="w-full md:h-full"
                                    src="../images/projects/lifemagazine.webp"
                                    alt="Lifemagazine.al"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div >

                <div className=" py-8 z-10">
                    <div className="max-w-screen-xl rounded-xl shadow-md mx-auto overflow-hidden">
                        <div className="lg:flex justify-between items-center">
                            <div className='p-8 space-y-4'>
                                <h2 className="text-5xl  tracking-wide text-black font-bold">Chunkzone</h2>
                                <p className="text-gray-500 text-2xl">Chunkzone is an online technology platform that provides downloading services</p>
                                <div className=" text-blue-500 font-semibold">
                                    <a className="flex items-center text-lg" target="_blank" rel="nofollow noopener noreferrer" href="https://chunkzone.com">Visit site <ArrowRightIcon className=" ml-2 h-6 w-6 text-blue-500" /></a>
                                </div>
                            </div>
                            <div class="md:flex-shrink-0 ">
                                <StaticImage
                                    className="w-full md:h-full"
                                    src="../images/projects/chunkzone.webp"
                                    alt="Chunkzone"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div >

                {/* <div className="">
                    {companies.map((company) => <PortfolioWork company={company}></PortfolioWork>)}
                </div> */}
            </div>
        </Layout>
    )
}

export default Portfolio
