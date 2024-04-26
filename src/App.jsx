// Components
import { ContactMe, Footer, Header, Project, SkillCard, Social, Tags, Title } from './components'

// Data
import { IoDocument } from "react-icons/io5";
import meImg from './assets/images/me.png'
import meTwoImg from './assets/images/m2.png'
import uiImg from './assets/images/ui.svg'
import frontendImg from './assets/images/frontend.svg'
import uxImg from './assets/images/ux.svg'

// Icon
import { FaLinkedin } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

// Style
import './App.css'
import { projects } from './const/projects'

function App() {

  return (
    <>
      <Header />
      <section className="hero section">
        <h1>ID STUDIOS</h1>
        <div className="info-container">
          <img src={meImg} alt="Me-img" />
          <Tags
            id='one'
            bgColor='--orange'
            number={1}
            name={`console.log(“hello world”);`}
          />
          <Tags
            id='two'
            bgColor='--secondary-orange'
            number={2}
            name={`<RactComponent/>`}
          />
          <Tags
            id='three'
            bgColor='--secondary-black'
            number={3}
            name={`function Welcome(props);`}
          />
          <div className="mysocial">
            <div className="social-container">
              <p>Check Out My</p>
              <Social
                link='www.linkedin.com/in/santiago-velasco-carrillo'
                icon={<FaLinkedin />}
              />
              <Social
                link='https://www.behance.net/santiagovelasco'
                icon={<FaBehance />}
              />
              <Social
                link='https://github.com/SantiagoV0106'
                icon={<FaGithub />}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="skills section">
        <SkillCard
          type='secondary'
          icon={uiImg}
          title='UI Design'
          desc={`Designing striking UIs with React, I merge creativity and user-centricity to deliver impactful solutions across industries.`}
        />
        <SkillCard
          type='primary'
          icon={frontendImg}
          title='Frontend'
          desc={`Crafting stunning websites with React, I merge creativity and user-centricity to deliver impactful solutions across industries.`}
        />
        <SkillCard
          type='secondary'
          icon={uxImg}
          title='UX Design'
          desc={`Crafting intuitive interfaces with user-centric design, I deliver impactful solutions with delightful user experiences.`}
        />
      </section>
      <Title
        title='My Work'
      />
      <section className="my-work section">
        {
          projects.map(({ id, link, img, name }) => {
            return (
              <Project
                key={id}
                projectImg={img}
                projectLink={link}
                projectName={name}
              />
            )
          })
        }
      </section>
      <Title
      title='About Me'
      />
      <section className="about-me section">
        <div className="about-me-container">
          <p className='about-me-subtitle'>About Me</p>
          <h3>Santiago Velasco</h3>
          <p >Frontend developer skilled in React, adept at translating design concepts into seamless user experiences. With a solid foundation in UX/UI design, I bring creativity and attention to detail to every project. Beyond coding, I find joy in channeling my creativity through the art of illustrating comics, blending technology and imagination in unique ways.</p>
          <a href="https://drive.google.com/file/d/1RrO_oUHaFhEwM-UfKR0ltp2cqYhL0n2i/view?usp=sharing">
           <IoDocument/> See my resume
          </a>
        </div>
        <img src={meTwoImg} alt="me-img" />
      </section>
      <Title
      title='Contact Me'
      />
      <section className="contact-me section">
        <ContactMe/>
      </section>
      <Footer/>
    </>
  )
}

export default App
