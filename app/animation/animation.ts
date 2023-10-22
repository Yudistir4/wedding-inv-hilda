export const wrapper = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  
 export const children = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.25, 0.9],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };