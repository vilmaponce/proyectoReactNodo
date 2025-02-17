import React from 'react';
import { motion } from 'framer-motion';
import { bounceCookies } from '../utility/animationCookies';
import { animatePersonaje } from '../utility/animationPersonaje';
import logocookies from "../assets/cookies.png";
import personaje from "../assets/fairyCute.png";
import fondo from "../assets/mundo.png";




const Body = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="flex justify-center items-center min-h-screen w-full bg-black/30 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl rounded-lg">

          {/* Sección izquierda */}
          <div className="p-10">
            <motion.img
              src={logocookies}
              alt="logo cookies"
              className="w-[150px] mx-auto mt-40 md:mt-0"
              {...bounceCookies} // Aplica la animación de rebote
            />

            <p className="py-12 text-white text-center font-serif text-lg leading-relaxed tracking-wide">
              <span className="text-pink-300">🌸✨</span> <span className="font-semibold text-purple-400">Bienvenido al Mundo de las Hadas</span> <span className="text-pink-300">✨🌸</span>

              <br />
              <span className="block mt-4 text-xl text-white opacity-75">
                Deja que la magia te envuelva. Las hadas con sus alas brillantes están listas para guiarte a un lugar donde los sueños se hacen realidad. <span className="text-yellow-300">🌟🧚‍♀️</span>
              </span>

              <br />
              <span className="block mt-6 text-2xl font-bold text-pink-400">
                ¿Listo para descubrir tu magia? <span className="text-red-500">💖</span>
              </span>
            </p>
            <div className="flex justify-center gap-4">
              <a className="bg-pink-400 py-2 px-12 rounded-3xl text-white hover:bg-pink-500 transition-all duration-300 flex items-center cursor-pointer">
                Únete ahora
              </a>
            </div>
          </div>

          {/* Sección derecha */}
          <motion.div {...animatePersonaje} className="flex justify-center w-full overflow-hidden">
            <img src={personaje} className="max-w-[500px] w-full md:w-auto h-auto" alt="Personaje" />
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Body;

