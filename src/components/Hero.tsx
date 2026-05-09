import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6f971e6a-3078-46b6-a0cc-9d26d4e46e32/files/a448dab2-c24f-4cbc-8bc5-29aedd1c776e.jpg"
          alt="Evolve RP city"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70" style={{color: '#d8b4fe'}}>GTA V Roleplay Server</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          EVOLVE <span style={{color: '#a855f7'}}>RP</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
          Живи своей историей. Каждое решение — твоё. Каждая роль — настоящая.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 uppercase text-sm tracking-widest font-semibold text-white border border-purple-500 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
          style={{background: 'rgba(168,85,247,0.15)'}}
        >
          Начать играть
        </a>
      </div>
    </div>
  );
}