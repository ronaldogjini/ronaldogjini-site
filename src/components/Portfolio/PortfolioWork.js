import React from 'react'
import { Link } from 'gatsby'
import ProjectTechnologies from './ProjectTechnologies'

function PortfolioWork({ project }) {
    return (
        <Link to={project.link}>
            <div class="py-4 px-4">
                <div class=" ">
                    <div class="bg-white relative shadow rounded-lg text-gray-800 hover:shadow-lg transform hover:scale-105 duration-500 z-0">
                        <img src={project.cover} alt={project.coverAlt} class="h-96 w-full rounded-lg object-center object-cover" />
                        <div class="flex justify-center">
                            <img src={project.logo} alt={project.logoAlt} class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16" />
                        </div>
                        <div class="py-2 px-2">
                            <div class=" font-bold font-title text-3xl text-center">{project.title}</div>
                            <div class="text-lg text-gray-400 text-center my-2">{project.description}</div>
                            {project.technologies ? <ProjectTechnologies technologies={project.technologies} /> : ''}
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default PortfolioWork
