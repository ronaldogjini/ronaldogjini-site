import React from 'react'
import Welcome from "./Welcome"

import ProjectToLife from "./ProjectToLife"
import LatestTechnologies from "./LatestTechnologies"
import WorkWithMe from './WorkWithMe'

function Mainpage() {

    return (
        <div className="max-w-screen mx-auto">

            <div className="dotted-background bg-cover">
                <Welcome />
            </div>

            <ProjectToLife />
            <LatestTechnologies />
            <WorkWithMe />
        </div>
    )
}

export default Mainpage
