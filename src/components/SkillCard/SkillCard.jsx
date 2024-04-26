// Eslint
/* eslint-disable react/prop-types */

// Style
import './skillcard.css'

export function SkillCard({type, icon, title, desc }) {
    return (
        <div className={`skill ${type}`}>
            <img src={icon} alt='icon' />
            <p className='title'>
                {title}
            </p>
            <p>{desc}</p>
        </div>
    )
}