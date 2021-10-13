import React from 'react'

function ProjectTechnologies({ technologies }) {
    return (
        <div className="flex justify-center py-4">
            {technologies.map(technology => <span
                class="text-md font-semibold text-blue-500 py-1 px-3 mr-4">
                #{technology}</span>)}
        </div>
    )
}

export default ProjectTechnologies
