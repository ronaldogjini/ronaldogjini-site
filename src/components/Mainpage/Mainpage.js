import React from 'react'
import Welcome from "./Welcome"

import ProjectToLife from "./ProjectToLife"
import LatestTechnologies from "./LatestTechnologies"
import WorkWithMe from './WorkWithMe'
import PortfolioExamples from './PortfolioExamples'

function Mainpage() {

    return (
        <div className="max-w-screen mx-auto">

            <div className="dotted-background bg-cover">
                <Welcome />
            </div>

            <ProjectToLife />
            <PortfolioExamples />
            <LatestTechnologies />
            <WorkWithMe />
        </div>
    )
}

export default Mainpage
