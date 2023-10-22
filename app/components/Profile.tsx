import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { setting } from '../setiing';
import { motion } from 'framer-motion';
import { children, wrapper } from '../animation/animation';
interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      className="flex col-span-2 flex-col justify-center items-center text-center gap-6 p-5 mt-36"
    >
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h2>Assalamualaikum Warahmatullahi Wabarakatuh</h2>
        <p className="w-[300px]">
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri acara pernikahan kami:
        </p>
      </motion.div>
      {/* profile Cowo */}
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative max-w-max">
          <Image
            className=" h-[130px] w-[130px] object-cover absolute left-[-60px] bottom-[-5px] -rotate-3"
            alt="daun"
            src="/assets/web/daun.webp"
          />
          <Image
            className=" h-[100px] w-[100px] object-cover absolute   right-[-16px] bottom-[-20px] z-20"
            alt="bunga3"
            src="/assets/web/bunga3.webp"
          />
          <Image
            className=" h-[180px] w-[180px] object-cover shadow-lg shadow-black/50  relative z-10"
            alt="cover"
            rounded="full"
            src="/assets/prewed/img5.webp"
          />
        </div>
        <div className="flex flex-col gap-8 items-center  justify-center mt-10">
          <h2 className="text-4xl font-brittany">
            {setting.pengantinPria.nama}{' '}
          </h2>
          <div className="flex flex-col items-center justify-center">
            <p>Putra {setting.pengantinPria.anakKe} dari :</p>
            <p>{setting.pengantinPria.anakDari}</p>
          </div>
        </div>
      </motion.div>

      {/* pembatas */}
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="flex w-full items-center max-w-xs my-4"
      >
        <span className="h-[2px] w-full bg-[#765C49]"></span>
        <AiFillHeart className=" w-16 text-3xl mx-2 text-[#765C49]" />
        <span className="h-[2px] w-full bg-[#765C49]"></span>
      </motion.div>
      {/* profile cewe */}
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative max-w-max">
          <Image
            className=" h-[130px] w-[130px] object-cover absolute right-[-36px] bottom-[-5px] rotate-3 scale-x-[-1]"
            alt="daun"
            src="/assets/web/daun.webp"
          />
          <Image
            className=" h-[100px] w-[100px] object-cover absolute rotate-[60deg]  left-[-25px] bottom-[-20px] z-20"
            alt="bunga3"
            src="/assets/web/bunga3.webp"
          />
          <Image
            className=" h-[180px] w-[180px] object-cover shadow-lg shadow-black/50  relative z-10"
            alt="cover"
            rounded="full"
            src="/assets/prewed/img4.webp"
          />
        </div>
        <div className="flex flex-col gap-8 items-center  justify-center mt-10">
          <h2 className="text-4xl font-brittany">
            {setting.pengantinWanita.nama}{' '}
          </h2>
          <div className="flex flex-col items-center justify-center">
            <p>Putri {setting.pengantinWanita.anakKe} dari :</p>
            <p>{setting.pengantinWanita.anakDari}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
