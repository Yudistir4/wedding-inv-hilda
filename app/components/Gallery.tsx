import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { children, wrapper } from '../animation/animation';
import { motion } from 'framer-motion';

interface IGalleryProps {}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  return (
    <motion.div
      variants={wrapper}
      initial="initial"
      exit="exit"
      whileInView="animate"
      transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center p-5 gap-5"
    >
      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="mb-5"
      >
        <h5 className="text-4xl ">
          <span>Our</span> <br />
          <span className="font-brittany">Gallery</span>
        </h5>
      </motion.div>
      <motion.p variants={children} viewport={{ once: true }}>
        Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial untuk
        satu sama lain. Dan Kami bersyukur, dipertemukan Tuhan diwaktu terbaik,
        Kini kami menanti hari istimewa kami.
      </motion.p>

      <motion.div
        variants={children}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-2"
      >
        <Image
          alt="gallery"
          src="/assets/prewed/img10.webp"
          className="hover:scale- object-cover rounded-xl col-span-4 aspect-video"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img3.webp"
          className="object-cover rounded-xl col-span-2 h-full"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img14.webp"
          className="object-cover rounded-xl"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img15.webp"
          className="object-cover rounded-xl"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img6.webp"
          className="object-cover rounded-xl"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img7.webp"
          className="object-cover rounded-xl h-full"
        />
        <Image
          alt="gallery"
          src="/assets/prewed/img11.webp"
          className="object-cover rounded-xl col-span-2  h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
