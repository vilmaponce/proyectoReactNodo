export const bounceCookies = {
  // Define la animación para el rebote de las cookies
  animate: {
    // Movimiento en el eje Y con un patrón de rebote
    y: [0, -10, 0], // La animación hace que el elemento se mueva de su posición original (0) a -10 píxeles hacia arriba y luego regrese a 0
    transition: {
      // Configura las propiedades de la transición
      duration: 1.5, // La animación durará 1.5 segundos
      repeat: Infinity, // La animación se repetirá infinitamente
      repeatType: "reverse", // El rebote será invertido en cada repetición, es decir, el movimiento alternará entre hacia arriba y hacia abajo
      ease: "easeInOut", // La animación tiene una aceleración y desaceleración suave al principio y al final
    }
  }
};
