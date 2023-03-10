import { useEffect, useRef, useState } from 'react';
import {
  useAnimation, AnimatePresence, motion, useScroll,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Box from './Box';

const AppNameVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function AppName({ txtDecoration }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      animate={{ scale: 2 }}
      initial="visible"
      variants={AppNameVariants}
    >
      <Box
        className="animate__backInDown"
        textDecoration={txtDecoration}
        textUnderlineOffset="1rem"
        textDecorationColor="#e5e7eb"
        sx={{
        // /* Fallback: Set a background color. */
          backgroundColor: 'teal',

          /* Create the gradient. */
          backgroundImage: 'linear-gradient(to right,#14b8a6,#8b5cf6)',

          /* Set the background size and repeat properties. */
          backgroundSize: '100%',
          backgroundRepeat: 'repeat',

          /* Use the text as a mask for the background. */
          /* This will show the gradient as a text color rather than element bg. */
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-moz-background-clip': 'text',
          '-moz-text-fill-color': 'transparent',
        }}
        as="span"
      >
        Hallza
      </Box>
    </motion.div>
  );
}

export default AppName;
