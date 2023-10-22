import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { setting } from '../setiing';
import { motion } from 'framer-motion';
import { children, wrapper } from '../animation/animation';

interface IIntroProps {}

 

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className=" gap-4 text-black flex flex-col items-center justify-center"
    >
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="relative w-full "
      >
        <Image
          className="absolute  left-0 w-[170px]  "
          alt="cover"
          src="/assets/web/X-WEB.webp"
        />
        <Image
          className="absolute  right-0 w-[170px]  scale-x-[-1]"
          alt="cover"
          src="/assets/web/X-WEB.webp"
        />
      </motion.div>
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className=" flex w-[200px] m-auto flex-col justify-center items-center relative"
      >
        <Image
          rounded="full"
          className="w-[200px] absolute -bottom-[60px] -left-[60px] object-cover  rotate-[20deg]"
          alt="cover"
          src="/assets/web/bunga1.webp"
        />

        <Image
          rounded="full"
          className="w-[200px] h-[200px] object-cover mt-32"
          alt="cover"
          src="/assets/prewed/img2.webp"
        />
      </motion.div>
      <motion.h2
        variants={children}
        viewport={{ once: true }}
        className="mt-20 text-xl"
      >
        The Wedding of
      </motion.h2>
      <motion.h1
        variants={children}
        viewport={{ once: true }}
        className="font-brittany text-5xl my-4 text-[#765C49]"
      >
        {setting.sebutan}
      </motion.h1>
      <motion.p
        variants={children}
        viewport={{ once: true }}
        className="font-bold text-xl"
      >
        {setting.tanggal}
      </motion.p>
    </motion.div>
  );
};

export default Intro;
