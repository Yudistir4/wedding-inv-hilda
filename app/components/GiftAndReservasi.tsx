import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  useClipboard,
} from '@chakra-ui/react';
import * as React from 'react';
import { AiFillGift, AiOutlineCopy } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { setting } from '../setiing';
import { AnimatePresence, motion } from 'framer-motion';
import { children, wrapper } from '../animation/animation';

interface IGiftAndReservasiProps {}

const GiftAndReservasi: React.FunctionComponent<IGiftAndReservasiProps> = (
  props
) => {
  const { onCopy, hasCopied } = useClipboard(setting.rekBCA1.rek);
  const { onCopy: onCopy2, hasCopied: hasCopied2 } = useClipboard(
    setting.rekBCA2.rek
  );

  const [isHidden, setIsHidden] = React.useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
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
        className="absolute  -top-[120px] right-0 w-[200px] scale-x-[-1]"
        alt="cover"
        src="/assets/web/bunga2.webp"
      />

      <div className="relative   z-10 flex flex-col justify-center items-center gap-4 p-10 rounded-[40px] m-5 bg-[#9E785E]">
        <motion.div
          variants={children}
          viewport={{ once: true }}
          className="text-center"
        >
          <h5 className="text-4xl ">
            <span>Wedding</span> <br />
            <span className="font-brittany">Gift</span>
          </h5>
        </motion.div>
        <motion.p
          variants={children}
          viewport={{ once: true }}
          className="text-center"
        >
          Doa restu anda merupakan karunia yang sangat berarti bagi kami. Jika
          memberi adalah ungkapan tanda kasih, anda dapat memberi kado secara
          cashless.
        </motion.p>
        {/* <Button
          variant="solid"
          borderRadius="full"
          leftIcon={<AiFillGift className="text-xl" />}
          className="bg-white text-[#9E785E]"
          onClick={toggleVisibility}
        >
          Kirim Hadiah
        </Button> */}
        {/* Rek dan Alanat */}
        <AnimatePresence>
          {isHidden && (
            <motion.div
              initial={{ scale: 0 }} // Opacity awal saat elemen muncul
              animate={{ scale: 1 }} // Opacity saat elemen disembunyikan atau ditampilkan
              transition={{
                duration: 0.5,

                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex transition-all gap-5 flex-col justify-center items-center w-full"
            >
              <motion.div
                variants={children}
                viewport={{ once: true }}
                className="flex p-4 shadow-lg shadow-black/30 text-black flex-col rounded-3xl   aspect-[5/3] w-full bg-[url('/assets/web/bg-card.jpg')]"
              >
                <Image
                  className=" w-[120px]  self-end"
                  alt="cover"
                  src="/assets/web/BCA-logo.png"
                />
                <Image
                  className=" w-[40px]  self-start"
                  alt="cover"
                  src="/assets/web/chip.png"
                />

                <p className="text-xl mt-2">{setting.rekBCA1.rek}</p>
                <p>a.n. {setting.rekBCA1.atasNama}</p>

                <Button
                  variant="solid"
                  borderRadius="full"
                  leftIcon={<AiOutlineCopy className="text-xl" />}
                  className="bg-white text-[#9E785E] max-w-max self-end"
                  onClick={onCopy}
                >
                  {hasCopied ? 'Copied!' : 'Copy'}
                </Button>
              </motion.div>

              <motion.div
                variants={children}
                viewport={{ once: true }}
                className="flex p-4 shadow-lg shadow-black/30 text-black flex-col rounded-3xl   aspect-[5/3] w-full bg-[url('/assets/web/bg-card.jpg')]"
              >
                <Image
                  className=" w-[120px]  self-end"
                  alt="cover"
                  src="/assets/web/BCA-logo.png"
                />
                <Image
                  className=" w-[40px]  self-start"
                  alt="cover"
                  src="/assets/web/chip.png"
                />

                <p className="text-xl mt-2">{setting.rekBCA2.rek}</p>
                <p>a.n. {setting.rekBCA2.atasNama}</p>

                <Button
                  variant="solid"
                  borderRadius="full"
                  leftIcon={<AiOutlineCopy className="text-xl" />}
                  className="bg-white text-[#9E785E] max-w-max self-end"
                  onClick={onCopy2}
                >
                  {hasCopied2 ? 'Copied!' : 'Copy'}
                </Button>
              </motion.div>
              <motion.div
                variants={children}
                viewport={{ once: true }}
                className="shadow-lg shadow-black/30 text-center items-center justify-center flex p-4 text-black flex-col rounded-3xl   aspect-[5/3] w-full bg-[url('/assets/web/bg-card.jpg')]"
              >
                <AiFillGift className="text-5xl text-[#9E785E] " />
                <h5 className="f=text-xl font-semibold">Alamat Kirim Kado :</h5>

                <p>{setting.kirimHadiah.alamat}</p>
                <h5 className="f=text-xl font-semibold mt-5">
                  Nama Penerima :
                </h5>
                <p>
                  {setting.kirimHadiah.penerima} ({setting.kirimHadiah.nomor})
                </p>
              </motion.div>
              <Button
                as={'a'}
                href="http://wa.me/6285889826277"
                variant="solid"
                borderRadius="full"
                leftIcon={<BsWhatsapp className="text-xl" />}
                className="bg-white text-[#9E785E]"
              >
                Konfirmasi Via Whatsapp
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div className="text-center mt-10">
          <h5 className="text-4xl ">
            <span>Reservasi</span> <br />
            <span className="font-brittany">Kehadiran</span>
          </h5>
        </div>

        <FormControl>
          <FormLabel>Nama</FormLabel>
          <Input rounded="full" color="black" type="text" bg="white" />
        </FormControl>
        <FormControl>
          <FormLabel>Alamat</FormLabel>
          <Input rounded="full" color="black" type="text" bg="white" />
        </FormControl> */}
      </div>
    </motion.div>
  );
};

export default GiftAndReservasi;
