import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TitleText = ({ title, textStyles }) => (
  <motion.h1
    // variants={textVariant2}
    // initial="hidden"
    // whileInView="show"
    className={` ${textStyles}`}
  >
    {title}
  </motion.h1>
);

export default TitleText;
