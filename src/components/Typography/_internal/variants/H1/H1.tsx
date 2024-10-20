import { motion } from 'framer-motion';

import { TypographyVariantProps } from '../..';

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
        transition={{ duration: 0.1, delay: index * 0.025 }}
      >
        {word}
      </motion.div>
    );
  });

  return <h1 className="text-4xl font-bold">{textanimate}</h1>;
};
