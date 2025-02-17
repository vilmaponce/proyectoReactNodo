export const animatePersonaje = {
  initial: { scale: 1 }, // Comienza con tamaño normal
  animate: {
    y: [100, 0],
    scale: [1, 1.1], // El personaje empieza normal y crece ligeramente
    opacity: [0, 1], // Se hace visible
  },
  transition: {
    duration: 1.5,
    ease: "easeOut",
  },
  whileHover: {
    scale: 1.3, // Al pasar el mouse, el personaje se agranda
  },
};

