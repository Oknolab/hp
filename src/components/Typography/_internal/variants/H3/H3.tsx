import { motion } from 'framer-motion';

import { TypographyVariantProps, params } from '../..';

export const H3 = ({ children }: TypographyVariantProps) => {
  const words = children || '';
  const word = words.split('');

  const textanimate = word.map((word, index) => {
    return (
      <motion.div
        key={index}
        animate={{ opacity: 1 }}
        className="inline"
        initial={{ opacity: 0 }}
        transition={{ duration: params.h1Duration * 0.5, delay: params.h1Delay(index) + 0.2 }}
      >
        {word}
      </motion.div>
    );
  });

  return <h3 className="text-xl font-bold">{textanimate}</h3>;
};
