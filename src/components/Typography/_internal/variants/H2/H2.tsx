import { motion } from 'framer-motion';

import { TypographyVariantProps, params } from '../..';

export const H2 = ({ children }: TypographyVariantProps) => {
  const words = children || '';
  const word = words.split('');

  const textanimate = word.map((word, index) => {
    return (
      <motion.div
        key={index}
        animate={{ opacity: 1 }}
        className="inline"
        initial={{ opacity: 0 }}
        transition={{ duration: params.h1Duration, delay: params.h1Delay(index) + 0.1 }}
      >
        {word}
      </motion.div>
    );
  });

  return <h2 className="flex flex-wrap text-2xl font-bold">{textanimate}</h2>;
};
