'use client';

import { Button, Image } from '@chakra-ui/react';
import Countdown from 'react-countdown';
import { IoMailOpen } from 'react-icons/io5';
import React, { useState, useEffect } from 'react';
import { setting } from '../setiing';
import { children, wrapper } from '../animation/animation';
import { motion } from 'framer-motion';

const Render = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <motion.div
      variants={children}
      viewport={{ once: true }}
      className="grid grid-cols-4 gap-3 bg-[#9E785E] text-white p-2 max-w-lg rounded-3xl m-5"
    >
      <div className="leading-5 rounded-xl px-10 py-3  text-xl flex flex-col items-center">
        <p className="text-2xl">{days}</p>
        <p>Hari</p>
      </div>
      <div className="leading-5 rounded-xl px-10 py-3  text-xl flex flex-col items-center">
        <p className="text-2xl">{hours}</p>
        <p>Jam</p>
      </div>
      <div className="leading-5 rounded-xl px-10 py-3  text-xl flex flex-col items-center">
        <p className="text-2xl">{minutes}</p>
        <p>Menit</p>
      </div>
      <div className="leading-5 rounded-xl px-10 py-3  text-xl flex flex-col items-center">
        <p className="text-2xl">{seconds}</p>
        <p>Detik</p>
      </div>
    </motion.div>
  );
};

const Time = () => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      className="text-center flex flex-col items-center mt-44"
    >
      <motion.h5
        variants={children}
        viewport={{ once: true }}
        className="text-4xl "
      >
        <span>Save</span> <br />
        <span className="font-brittany">The Date</span>
      </motion.h5>

      <Countdown date={new Date('nov 12, 2023 11:00:00')} renderer={Render} />

      {/* Akad Card */}
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="w-full p-5 relative"
      >
        <Image
          alt="bg"
          src="/assets/web/daun3.webp"
          className="w-[100px] absolute top-0 left-0 scale-x-[-1]"
        />
        <div className="rounded-[40px] bg-black/10 shadow-lg shadow-black/50 w-full p-5">
          <h4 className="font-brittany text-4xl text-[#9E785E] mb-4">
            Akad Nikah
          </h4>
          <h5 className="font-bold text-xl mb-5">{setting.acara.akad.tgl}</h5>
          <p>
            Pukul : {setting.acara.akad.waktu}
            <br />
            Bertempat di :
            <br />
            {setting.acara.akad.tempat}
          </p>
          <Button
            variant="solid"
            borderRadius="full"
            leftIcon={<IoMailOpen className="text-xl" />}
            className="bg-[#9E785E] text-white mt-5 hover:bg-[#9E785E]/70"
            as="a"
            href={setting.acara.resepsi.maps}
            // onClick={handleToggleVisibility}
          >
            Google Maps
          </Button>
        </div>
      </motion.div>
      {/* Resepsi Card */}
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="w-full p-5 relative"
      >
        <Image
          alt="bg"
          src="/assets/web/daun3.webp"
          className="w-[100px] absolute top-20 right-0  "
        />
        <div className="rounded-[40px] bg-black/10 shadow-lg shadow-black/50 w-full p-5">
          <h4 className="font-brittany text-4xl text-[#9E785E] mb-4">
            Resepsi
          </h4>
          <h5 className="font-bold text-xl mb-5">
            {setting.acara.resepsi.tgl}
          </h5>
          <p>
            Pukul : {setting.acara.resepsi.waktu}
            <br />
            Bertempat di :
            <br />
            {setting.acara.resepsi.tempat}
          </p>
          <Button
            variant="solid"
            borderRadius="full"
            leftIcon={<IoMailOpen className="text-xl" />}
            className="bg-[#9E785E] text-white mt-5 hover:bg-[#9E785E]/70"
            as="a"
            href={setting.acara.resepsi.maps}
          >
            Google Maps
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Time;
