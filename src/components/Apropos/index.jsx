import useAnimateOnScroll from '../../utils/hooks/useAnimateOnScroll'
import '../../styles/components/apropos.scss'
import '../../styles/themes/global.scss'

// Import des icônes depuis le dossier assets
import GameIcon from '../../assets/icons/gaming.png'
import MuscuIcon from '../../assets/icons/muscu.png'
import CinemaIcon from '../../assets/icons/cinema.png'
import AnimauxIcon from '../../assets/icons/animaux.png'

function Apropos() {
  const ref = useAnimateOnScroll()
  return (
    <div className="description animated-element" ref={ref}>
      <p>  
      Moi, c’est Maeva, <strong>Développeuse Web.</strong>
         <br/>
      Prête à explorer la galaxie du code, armée d’une passion aussi tranchante qu’un sabre laser ! 
        <br/>
      Après six années d’engagement dans le médico-social, j’ai pris un nouveau cap avec une formation intensive de 6 mois pour me lancer dans le développement web.
        <br/>
      Aujourd’hui, je recherche une alternance pour continuer cette aventure, apporter mes compétences et m’enrichir de nouvelles connaissances. 
       <br/>
      Ma mission ? Donner vie à vos projets, dans une galaxie pas si lointaine…
       <br/>
      Découvrez quelques exemples de projets intéressants <a href="#portfolio">à voir ici.</a>
       <br/>
      </p>
      
      <div className="passions-icons">
        <img src={GameIcon} alt="Jeux vidéo" className="icon" title="Jeux vidéo" />
        <img src={MuscuIcon} alt="Musculation" className="icon" title="Musculation" />
        <img src={CinemaIcon} alt="Cinema" className="icon" title="Cinema" />
        <img src={AnimauxIcon} alt="Animaux" className="icon" title="Animaux" />
      </div>
      <div className="quote"> 
        <p>

        </p>
      </div>
    </div>
    
  )
}

export default Apropos