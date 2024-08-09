import React from 'react';
import GameProvider from "../components/2048/context/game-context";
import Board from "../components/2048/board";
import Score from "../components/2048/score";
import BestScore from "../components/2048/best-score";
import "../components/2048/styles/globals.css";

const TwoZeroFourEightRoute = () => {
    return (
        <GameProvider>
            <div className='flex flex-col justify-center items-center gap-3'>
                <header className="w-[65%] flex justify-end items-center gap-2">
                    <div className='w-[30%]'>
                        <Score />
                    </div>
                    <div className='w-[30%]'>
                        <BestScore />
                    </div>
                </header>
                <div className='w-[65%]'>
                    <button className='flex justify-center items-center gap-2 p-2 rounded-md bg-[#8f7a66] text-[#f9f6f2] font-bold'>
                        New Game
                    </button>
                </div>
                <main>
                    <Board />
                    <div className='flex my-5 justify-center items-center gap-3'>
                        <div className='text-[1.75rem] font-bold font_josefinsans'>Game Over</div>
                        <button style={{ border: "1px solid black" }} className='flex justify-center items-center gap-2 p-2 rounded-md bg-[#bbada0] text-[#562b2b]'>
                            <span className='font_poppins font-medium'>Try Again</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </main>
            </div>
        </GameProvider>
    )
}

export default TwoZeroFourEightRoute