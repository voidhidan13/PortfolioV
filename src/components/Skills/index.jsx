import Frontend from '../../assets/images/frontend.png'
import Backend from '../../assets/images/backend.png'
import useAnimateOnScroll from '../../utils/hooks/useAnimateOnScroll'
import '../../styles/components/skills.scss'
import '../../styles/themes/global.scss'


function Skills() {
    const ref = useAnimateOnScroll()
    return (
        <div className="skills animated-element" ref={ref}>
            <div className="flux"></div>
            <div className="skills__container">
                <img src={Frontend} className="skills__container__img" alt="Compétences frontend" loading="lazy"/>
                <p className="skills__container__txt">Frontend</p>
            </div>
            <div className="skills__container">
                <img src={Backend} className="skills__container__img" alt="Compétences backend" loading="lazy"/>
                <p className="skills__container__txt">Backend</p>
            </div>
        </div>
    )
}

export default Skills
