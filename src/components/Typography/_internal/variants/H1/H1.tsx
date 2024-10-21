import { motion } from 'framer-motion';

import { TypographyVariantProps } from '../..';
import { params } from '../..';

export const H1 = ({ children }: TypographyVariantProps) => {
  const words = children || '';
  const word = words.split('');

  const textanimate = word.map((word, index) => {
    return (
      <motion.div
        key={index}
        animate={{ opacity: 1 }}
        className="inline"
        initial={{ opacity: 0 }}
        transition={{ duration: params.h1Duration, delay: params.h1Delay(index) }}
      >
        {word}
      </motion.div>
    );
  });

  return <h1 className="flex flex-wrap text-4xl font-bold">{textanimate}</h1>;
};
