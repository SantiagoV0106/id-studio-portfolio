// Data
import idLogo from '/id.svg'
import { FaLinkedin } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

// Style
import './footer.css'
import { socialLinks } from '../../const/socialLinks'
import { Social } from '../Social/Social'

export function Footer() {

    const icons = [FaLinkedin, FaBehance, FaGithub]

    return (
        <footer>
            <img src={idLogo} alt='ID-Img' />
            <div className="social-media">
                {
                    socialLinks.map(({ id, link }, i) => {
                        const IconComponent = icons[i]
                        return (
                            <Social
                                key={id}
                                link={link}
                                icon={<IconComponent />} />
                        )
                    })
                }
            </div>
            <p>© 2024 ID Studio.</p>
        </footer>
    )
}