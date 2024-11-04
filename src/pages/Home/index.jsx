import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Section from '../../components/Section'
import Data from '../../data/sections.json'
import Apropos from '../../components/Apropos'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portfolio'
import '../../styles/pages/home.scss'
import '../../styles/themes/global.scss'

function Home() {
  return (
    <div className='homeContainer'>
      <Header />
      <div className='home'>
        <Banner />
        {Data?.map((section, index) => (
          <Section key={index} id={section.id} title={section.title} subtitle={section.subtitle}>
            {index === 0 && <Apropos />}
            {index === 1 && <Skills />}
            {index === 2 && <Portfolio />}
            {index === 3 && <Contact />}
          </Section>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
