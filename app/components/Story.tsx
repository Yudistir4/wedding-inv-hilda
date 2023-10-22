import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { setting } from '../setiing';
import { children, wrapper } from '../animation/animation';
import { motion } from 'framer-motion';

interface IStoryProps {}

const Story: React.FunctionComponent<IStoryProps> = (props) => {
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
        src="/assets/web/daun2.webp"
      />
      <Image
        className="absolute -bottom-[120px] right-0 w-[200px] rotate-180 "
        alt="cover"
        src="/assets/web/daun2.webp"
      />

      <motion.div className="relative z-10   text-left flex flex-col justify-center gap-5 p-10 rounded-[40px] m-5 bg-[#9E785E] bg-[url('/assets/web/daun-story.webp')] bg-right-top bg-cover">
        <motion.h3
          variants={children}
          viewport={{ once: true }}
          className="text-4xl flex flex-col"
        >
          <span>Our</span>
          <span className="font-brittany -mt-2">Journey</span>
        </motion.h3>
        <motion.p
          variants={children}
          viewport={{ once: true }}
          className="leading-4"
        >
          Dua jiwa namun satu pikiran, <br /> dua hati namun satu perasaan.
        </motion.p>
        {setting.story.map((e, i) => (
          <motion.div variants={children} viewport={{ once: true }} key={i}>
            <div className="">
              <h4 className="font-bold text-xl">{e.waktu}</h4>
              <p>{e.desc}</p>
            </div>
            {i != setting.story.length - 1 && (
              <div className="h-[2px] w-full bg-white mt-4"></div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Story;
