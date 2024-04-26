// Eslint
/* eslint-disable react/prop-types */

// Data
import arrow from '../../assets/images/arrow.svg'

// Style
import './project.css'

export function Project({ projectLink, projectImg, projectName }) {
    console.log(projectImg);
    return (
        <a 
        target='_blank'
        className="project" href={projectLink}>
            <div
                className="img-container">
                <img src={projectImg} alt={projectName} />
            </div>
            <div className="project-info">
                <p>{projectName}</p>
                <div>
                    <p>Learn More</p>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </a>
    )
}