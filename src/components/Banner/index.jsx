import { useEffect, useRef } from 'react'
import { initializeCanvasAnimations } from '../../utils/animationbanner'
import { initializeTyped } from '../../utils/typedConfig'
import Portrait from '../../assets/images/main.png'
import '../../styles/components/banner.scss'
import '../../styles/themes/global.scss'

function Banner() {

  const typedRef = useRef(null); // Utilisé pour référencer le conteneur de Typed.js

  // Code pour Type.js
  useEffect(() => {
    // Initialisation de Typed.js
    const cleanupTyped = initializeTyped(typedRef);

    // Cleanup lorsque le composant se démonte
    return () => {
      if (cleanupTyped) cleanupTyped();
    };
  }, []);

  // Appel de la fonction d'animation de la bannière
  useEffect(() => {
    initializeCanvasAnimations('c'); 
  }, []);

  return (
    <section id="banner">
      <canvas id="c"></canvas>
      <div className="banner__title">
        <div className="banner__text-container">
          <p className="banner__title__text">
            <span>Hello There, It's</span><br />
            <span className="highlighted-name">Maeva</span><br />
            <span>je suis </span>
            <span ref={typedRef} className="typed-text"></span>
          </p>
        </div>

        <div className="banner__title__img">     
          <img src={Portrait} alt="Bitmoji de Maeva" />   
          <div className="hover">
            <span>Click me !</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;