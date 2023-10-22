import { Button, Image } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { IoMailOpen } from 'react-icons/io5';
import { setting } from '../setiing';
import { useSearchParams } from 'next/navigation';

interface ICoverProps {
  isVisible: boolean;
  handleToggleVisibility: () => void;
}

const Cover: React.FunctionComponent<ICoverProps> = ({
  isVisible,
  handleToggleVisibility,
}) => {
  const search = useSearchParams();
  const tamu = search.get('tamu');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="fixed text-white w-full h-screen max-w-md bg-black z-50"
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
            className="w-full object-cover object-bottom h-[65vh]"
            alt="cover"
            src="/assets/prewed/img9.webp"
          />
          <div className="text-lg bg-gradient-to-t flex flex-col items-center justify-center gap-4   from-[#9E785E] from-70% w-full h-[50vh] absolute left-0 bottom-0">
            <h2 className="mt-20">The Wedding of</h2>
            <h1 className="font-brittany text-5xl my-4">{setting.sebutan}</h1>
            <p>Dear</p>
            <p>{tamu ? tamu : 'Tamu Undangan'}</p>
            <Button
              variant="solid"
              borderRadius="full"
              leftIcon={<IoMailOpen className="text-xl" />}
              className="bg-white text-[#9E785E]"
              onClick={handleToggleVisibility}
            >
              Open Invitation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cover;
