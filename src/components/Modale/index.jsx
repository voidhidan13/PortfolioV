import React, { useState, useEffect} from 'react'
import Modal from 'react-modal'
import useAnimateOnScroll from '../../utils/hooks/useAnimateOnScroll'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../../styles/components/modale.scss'
import '../../styles/themes/global.scss'


// Configurer l'élément principal de l'application pour l'accessibilité
Modal.setAppElement('#root') // Assurez-vous que cet élément correspond à l'élément racine de votre application

function Modale({title='', picture='', github='', tags=[], mission='', remarques=''}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const ref = useAnimateOnScroll()

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    // Désactiver le défilement du body lorsque la modale est ouverte
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto' // Réactiver le défilement lorsque la modale est fermée
    }
  }, [modalIsOpen])

  return (
    <div className="portfolio-content">
      <button className="btn-modale animated-element" style={{backgroundImage: `url(${picture})`}} onClick={openModal} ref={ref}>
        <div className="hover-card">
          <span>Projet {title}</span>
          <div className="hover-card__seemore"> 
            <span>Voir plus  </span> 
            <ArrowForwardIcon style={{color: '#5F6F65'}}/>
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`Modale du projet ${title}`}
        className= 'modal'
        closeTimeoutMS={500}
      >
      <div className='modale-content'>
        <h2 className='modale-content__title'>{title}</h2>
        <div className='modale-content__projet'>
          <img src={picture} className='modale-content__projet--img' alt={`Description du projet ${title}`}/>
          <div className='modale-content__projet--description'>
            <div>
              <h4>Mission :</h4>
              <div>{mission}</div>
            </div>
            <div>
              <h4>Compétences développées :</h4>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">Lien Github</a>
          </div>
        </div>
        <button className='modale-content__btn'onClick={closeModal}>Fermer</button>
      </div>
      </Modal>
    </div>
  )
}

export default Modale