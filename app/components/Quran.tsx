import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { motion } from 'framer-motion';
import { children, wrapper } from '../animation/animation';
interface IQuranProps {}
 
const Quran: React.FunctionComponent<IQuranProps> = (props) => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      className="relative mt-[200px] text-white"
    >
      <Image
        className="absolute  -top-[120px] left-0 w-[200px]"
        alt="cover"
        src="/assets/web/bunga2.webp"
      />
      <Image
        className="absolute -bottom-[120px] right-0 w-[200px] rotate-180 "
        alt="cover"
        src="/assets/web/bunga2.webp"
      />

      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col justify-center items-center gap-4 p-10 rounded-[40px] m-5 bg-[#9E785E]"
      >
        <Image
          className=" w-[90%] h-[200px] object-cover object-bottom border-4 border-white border-solid "
          alt="cover"
          src="/assets/prewed/img11.webp"
        />
        <motion.p
          viewport={{ once: true }}
          variants={children}
          className="text-center text-sm"
        >
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.”
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          variants={children}
          className="font-brittany text-xl"
        >
          Q.S. Ar-Rum : 21
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Quran;
