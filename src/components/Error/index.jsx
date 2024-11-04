import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/themes/global.scss'
import '../../styles/components/error.scss'

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection vers la page d'accueil après un délai ou sur une action utilisateur
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // 3 secondes avant la redirection

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='errorContainer'>
      <Header />
      <div className='error'>
        <span className='error__404' >404</span>
        <div className='error__span'>
          <span>Oups! La page que vous&nbsp;demandez&nbsp;n'existe pas.</span>
        </div>
        <p>Vous allez être redirigé vers la page d'accueil...</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Error
