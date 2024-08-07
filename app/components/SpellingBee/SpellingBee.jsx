import React from 'react';
import { motion } from 'framer-motion';
import { useSpellingBeeStore } from '../../store/spellingBeeStore';
import HexagonHive from './HexagonHive';
import ScoreProgress from './ScoreProgress';
import Modal from '../Modals/Modal';
import { getUserLevelData, scoreValidator } from '../../services/spellingbee';
import './spellingbee.css';

const SpellingBee = ({ letters }) => {
    const {
        hiveLetters,
        centerLetter,
        word,
        getShuffledLetters,
        addLetters,
        removeLetterToWord,
        resetWord,
        addCorrectWord,
        correctWords,
        score,
        setScore
    } = useSpellingBeeStore((state) => state)

    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        addLetters(letters)
    }, [letters])


    const UserLevelData = getUserLevelData(score)

    if (word.length > 18) {
        resetWord()
    }

    const handleWordValidation = () => {
        const validWords = ['MSLBD', 'MBBS', 'GLSTM', 'GMDTLBS', 'DBLSM', 'SBBM', 'MTSLG', 'STML']

        if (word.length < 4) {
            console.log("Word length less than 4.");
        } else if (!word.includes(centerLetter)) {
            console.log(`${centerLetter} not included in word.`);
        } else if (!validWords.includes(word)) {
            console.log("Not in word list.");
        } else if (correctWords?.includes(word)) {
            console.log("Already Found");
        } else {
            addCorrectWord(word);
            setScore(scoreValidator(word))
        }

        return resetWord();
    }
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full flex flex-col items-center justify-center gap-[3rem]'>
                <div className='w-[90%] mx-auto flex flex-col justify-center items-start gap-2'>
                    <div className='w-full'>
                        <ul className='spellbee_navbar font_poppins flex justify-end items-center text-[#30003a] text-[14px] font-medium gap-2'>
                            {/* <li>How to Play</li> */}
                            <li>Ranking</li>
                        </ul>
                    </div>
                    <div className='font_poppins w-full spellingbee_progress border-t-[0.5px] border-t-solid border-t-[#d3d3d3] py-1'>
                        <ScoreProgress UserLevelData={UserLevelData} score={score} />
                    </div>
                    <button onClick={() => setOpen(prev => !prev)} className="w-full h-[40px] cursor-pointer spellingbee_correctwords text-[#30003a] text-[14px] font-medium flex justify-start items-center border-y-[0.5px] border-y-solid border-y-[#d3d3d3]">
                        <div className='flex-1 font_poppins line-clamp-1'>{correctWords?.length === 0 ? "Your Words..." : correctWords?.join(", ")?.toLowerCase()}</div>
                        <div className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey" className="w-5">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className='w-full flex_center'>
                    <div className='w-full h-[55px] p-3 text-center origin-center border-none outline-none text-[1.45rem] font-bold tracking-wider uppercase'>
                        {word.split('').map((char, index) => (
                            <span
                                key={index}
                                className={char === centerLetter ? 'text-[#f7da21]' : 'text-[#30003a]'}>
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <HexagonHive letters={hiveLetters} centerLetter={centerLetter} />
                </div>
                <div className='w-fit font-medium flex justify-evenly items-center gap-[1rem]'>
                    <motion.button
                        onClick={() => removeLetterToWord()}
                        className='border_btn py-[15px] px-[20px] rounded-full'
                        whileTap={{ scale: 0.9 }}
                    >
                        Delete
                    </motion.button>
                    <motion.button
                        onClick={() => getShuffledLetters()}
                        className='border_btn py-[15px] px-[15px] rounded-full'
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </motion.button>
                    <motion.button
                        onClick={() => handleWordValidation()}
                        className='border_btn py-[15px] px-[20px] rounded-full'
                        whileTap={{ scale: 0.9 }}
                    >
                        Enter
                    </motion.button>
                </div>
            </div>
            <Modal
                open={open}
                setOpen={setOpen}
                title={`You have found ${correctWords?.length} words`}
            >
                <div className='w-full my-2 px-5 text-[#30003a] text-[14px]'>
                    <ul style={{ listStyle: "disc" }}>
                        {correctWords?.map((word, i) => <li key={i}>{word}</li>)}
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default SpellingBee