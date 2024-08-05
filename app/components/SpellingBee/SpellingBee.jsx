import React from 'react';
import HexagonHive from './HexagonHive';
import './spellingbee.css';

const SpellingBee = () => {
    const [text, setText] = React.useState("")
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full flex flex-col items-center justify-center gap-[3.5rem]'>
                <div className='w-[40%] mx-auto flex_center'>
                    <div className='w-full p-3 border-none outline-none text-[1.45rem] font-bold tracking-wide uppercase'>
                        {text}
                    </div>
                </div>
                <div>
                    <HexagonHive setText={setText} text={text} />
                </div>
                <div className='w-fit font-medium flex justify-evenly items-center gap-[1rem]'>
                    <div className='border_btn py-[15px] px-[20px] rounded-full'>
                        Delete
                    </div>
                    <div className='border_btn py-[15px] px-[15px] rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                    <button className='border_btn py-[15px] px-[20px] rounded-full'>
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpellingBee