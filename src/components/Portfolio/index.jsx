import Modale from '../../components/Modale'
import Data from '../../data/projets.json'
import '../../styles/components/portfolio.scss'
import '../../styles/themes/global.scss'

function Portfolio() {
    return (
        <div className="portfolio">
            {Data?.map((projet, index) => {
                
                const imageSrc = require(`../../assets/images/${projet.picture}`)
                
                return (
                    <Modale 
                        key={index} 
                        title={projet.title}
                        picture={imageSrc}
                        github={projet.github}
                        mission={projet.mission}
                        tags={projet.tags}
                    />
                )
            })}
        </div>
    )
}

export default Portfolio