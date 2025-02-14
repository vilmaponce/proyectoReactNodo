export const animatePersonaje = {
    initial: { y: -100, scale: 1.1, opacity: 0 }, 
    animate: { 
        y: [-100, -20, 0], // Baja con un pequeño freno
        scale: [1.1, 1.4, 1.3], // Se agranda más al acercarse antes de estabilizarse
        opacity: [0, 0.5, 1], // Aparición progresiva
        transition: { duration: 1.5, ease: "easeOut" } 
    }, 
    whileHover: { scale: 1.5 } // Hace un zoom aún mayor al pasar el mouse
};
