import React from 'react'
import Welcome from "./Welcome"
import LearnMoreArrow from './LearnMoreArrow'
import Introduction from './Introduction'
import Technologies from './Technologies'
import Education from './Education'
import WorkWithMe from './WorkWithMe'
import '../../styles/arrowanimation.scss'
import '../../styles/stars.css'


function Mainpage() {

    return (
        <div className="max-w-screen mx-auto">


            {/* <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div> */}

            <div className="background">

                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <Welcome />
                <LearnMoreArrow to="#about" />
            </div>

            <Introduction />
            <Technologies />
            <Education />
            <WorkWithMe />
        </div>
    )
}

export default Mainpage
