import React from 'react';
import { motion } from 'framer-motion';
import { useSpellingBeeStore } from '../../store/spellingBeeStore';

const HexagonHive = ({ letters, centerLetter }) => {
    return (
        <div className='font_nunito'>
            <div className='w-full flex justify-center'>
                <MotionFadeIn data={letters?.[0]} />
                <MotionFadeIn data={letters?.[1]} />
            </div>
            <div className='w-full flex justify-center'>
                <MotionFadeIn data={letters?.[2]} />
                <MotionFadeIn data={centerLetter} classNames='hexa_central' />
                <MotionFadeIn data={letters?.[3]} />
            </div>
            <div className='w-full flex justify-center'>
                <MotionFadeIn data={letters?.[4]} />
                <MotionFadeIn data={letters?.[5]} />
            </div>
        </div>
    )
}

const MotionFadeIn = ({ data, classNames = "" }) => {
    const { addLetterToWord } = useSpellingBeeStore((state) => state)

    const handleClick = () => {
        addLetterToWord(data);
    };
    return (
        <motion.button
            onClick={handleClick}
            className={`hexagon ${classNames}`}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            >
                {data}
            </motion.div>
        </motion.button>
    )
}

export default HexagonHive