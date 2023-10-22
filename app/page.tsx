'use client';
import { Avatar, Button, IconButton, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMailOpen } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';

// import Time from './components/Time';

import dynamic from 'next/dynamic';
const Time = dynamic(() => import('./components/Time'), { ssr: false });

import Gallery from './components/Gallery';
import GiftAndReservasi from './components/GiftAndReservasi';
import Closing from './components/Closing';
import Cover from './components/Cover';
import Intro from './components/Intro';
import Quran from './components/Quran';
import Profile from './components/Profile';
import Story from './components/Story';
import { wrapper } from './animation/animation';
import { BsFileEarmarkPlay, BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioUrl = '/assets/web/lagu.mp4'; // Replace this with the URL of your audio file

  const audioRef = React.useRef<HTMLAudioElement>(new Audio(audioUrl));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error: any) => {
        // Handle any errors that occurred while trying to play the audio
        console.error('Play failed:', error);
      });
    }
  };
  // const [show, setShow] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(false);
    togglePlay();
  };
  // const router = useRouter();
  // const query = router.query;
  // const untuk = query.untuk as string;
  return (
    <main
      className={`font-josefin text-black bg-[#FFFFFF] w-full  overflow-hidden ${
        isVisible ? 'overflow-hidden max-h-screen' : 'overflow-auto'
      }`}
    >
      {!isVisible && (
        <div
          onClick={togglePlay}
          className="w-10 h-10 hover:bg-black right-5 bottom-5 fixed bg-black text-white z-30 flex items-center justify-center text-2xl rounded-full"
        >
          {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        </div>
      )}
      <motion.div
        className={`max-w-md bg-[url('/assets/web/bg.webp')]  flex flex-col m-auto  `}
      >
        <Cover
          isVisible={isVisible}
          handleToggleVisibility={handleToggleVisibility}
        />

        {/* <div className="absolute inset-0 overflow-auto max-w-md m-auto"> */}
        <AnimatePresence>
          {!isVisible && (
            <>
              <Intro />
              <Quran />
              <Profile />
              <Story />

              <Time />
              <Gallery />
              <GiftAndReservasi />
              <Closing />
            </>
          )}
        </AnimatePresence>
        {/* </div> */}
      </motion.div>
    </main>
  );
}
