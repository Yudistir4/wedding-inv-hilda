import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { setting } from '../setiing';
import { children, wrapper } from '../animation/animation';
import { motion } from 'framer-motion';

interface IClosingProps {}

const Closing: React.FunctionComponent<IClosingProps> = (props) => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      className="relative text-center pb-32"
    >
      <Image
        className="absolute -top-12 right-0 w-[170px] rotate-180"
        alt="cover"
        src="/assets/web/X-WEB.webp"
      />
      <Image
        className="absolute -top-12 left-0 w-[170px] -rotate-180 scale-x-[-1]"
        alt="cover"
        src="/assets/web/X-WEB.webp"
      />
      <Image
        className="absolute bottom-0 w-full"
        alt="daun"
        src="/assets/web/daun4.webp"
      />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={children}
          viewport={{ once: true }}
          className="relative mt-28 "
        >
          <motion.div
            animate={
              {
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 180, 180, 0],
              }
            }
            // transition={{
            //   duration: 2,
            //   ease: 'easeInOut',
            //   times: [0, 0.2, 0.5, 0.8, 1],
            //   repeat: Infinity,
            // }}
            className="w-[100px] h-[100px] bg-red-6000"
          >
            <Image
              className=" h-[130px] w-[130px] object-cover absolute right-[-60px] bottom-[-5px] rotate-3 scale-x-[-1]"
              alt="daun"
              src="/assets/web/daun.webp"
            />
          </motion.div>
          <Image
            className=" h-[130px] w-[130px] object-cover absolute left-[-60px] bottom-[-5px] -rotate-3"
            alt="daun"
            src="/assets/web/daun.webp"
          />
          <Image
            className=" h-[180px] w-[180px] object-cover shadow-lg shadow-black/50  relative z-10"
            alt="cover"
            rounded="full"
            src="/assets/prewed/img6.webp"
          />
        </motion.div>
        <motion.p variants={children} viewport={{ once: true }} className="m-5">
          Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir dalam hari bahagia ini. Terima kasih atas segala
          ucapan, doa, dan perhatian yang diberikan.
        </motion.p>
        <motion.p
          variants={children}
          viewport={{ once: true }}
          className="font-bold text-xl"
        >
          See you on our wedding day!
        </motion.p>
        <motion.h4
          variants={children}
          viewport={{ once: true }}
          className="text-4xl font-brittany text-[#9E785E] mt-10"
        >
          {setting.sebutan}
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default Closing;
