import React from 'react'
import { Link } from "gatsby"


function WorkWithMe() {
    return (
        <div className=" mx-auto py-16 px-8 bg-red-500">
            <div id="about" className="max-w-lg mx-auto b rounded-xl overflow-hidden md:max-w-screen-lg">
                <h2 className="text-5xl uppercase font-bold pb-8 mx-auto text-white">Got a project idea?</h2>
                <p className="text-gray-100 text-xl">Let's work together. I am sure we can turn your ideas into a new and exiting project.</p>
                <button className="bg-black hover:bg-gray-800 rounded-xl text-white px-4 py-2 font-bold mt-5">
                    <Link to="/contact">Contact me</Link>
                </button>
            </div>
        </div>
    )
}

export default WorkWithMe
