import Typed from 'typed.js';

export function initializeTyped(elementRef) {
  const options = {
    strings: ['développeusse Web', 'passionnée de jeux video', 'toujours motivée'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
  };

  if (elementRef.current) {
    const typed = new Typed(elementRef.current, options);

    // Cleanup de Typed.js lorsque le composant se démonte
    return () => {
      typed.destroy();
    };
  }
}