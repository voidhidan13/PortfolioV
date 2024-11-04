import LogoLinkedin from '../../assets/icons/logo-linkedin.png'
import LogoGit from '../../assets/icons/logo-github.png'
import '../../styles/components/footer.scss'
import '../../styles/themes/global.scss'

function Footer() {
  return (
    <footer>
      <div className="logo">
        <div className="logo__reseaux">
          <a href="https://github.com/Voidhidan13" target="_blank" rel="noopener noreferrer"><img src={LogoGit} alt="Logo Github Garcia Maeva"/></a>
        </div>
        <div className="logo__reseaux">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer"><img src={LogoLinkedin} alt='Logo Linkedin Garcia Maeva'/></a>
        </div>
      </div>
      <span>Réalisé par voidhidan</span>
    </footer>
  )
}

export default Footer