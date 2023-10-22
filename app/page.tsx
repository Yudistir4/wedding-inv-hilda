'use client';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

// import Time from './components/Time';

import dynamic from 'next/dynamic';
const Time = dynamic(() => import('./components/Time'), { ssr: false });
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import Closing from './components/Closing';
import Cover from './components/Cover';
import Gallery from './components/Gallery';
import GiftAndReservasi from './components/GiftAndReservasi';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Quran from './components/Quran';
import Story from './components/Story';
export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play().catch((error: any) => {
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

  return (
    <main
      className={`font-josefin text-black bg-[#FFFFFF] w-full  overflow-hidden ${
        isVisible ? 'overflow-hidden max-h-screen' : 'overflow-auto'
      }`}
    >
      <audio className="hidden" ref={audioRef} controls>
        <source src="/assets/web/lagu.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!isVisible && (
        <div
          onClick={togglePlay}
          className="w-10 h-10 cursor-pointer hover:bg-black right-5 bottom-5 fixed bg-black text-white z-30 flex items-center justify-center text-2xl rounded-full"
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
