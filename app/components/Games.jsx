import React from 'react';
import { Link } from '@remix-run/react';

const GamesList = () => {
    return (
        <div className='font_nunito w-full h-full flex justify-center content-start gap-[1rem] flex-wrap pt-[7rem] px-4'>
            <Link
                to={"/sudoko"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Sudoko
            </Link>
            <Link
                to={"/spelling-bee"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Spelling Bee
            </Link>
            <Link
                to={"/dotrush"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Dot Rush
            </Link>
            <Link
                to={"/2048"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                2048
            </Link>
            <Link
                to={"/bubbleshooter"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Bubble Shooter
            </Link>
            <Link
                to={"/lineupdots"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Line Up Dots
            </Link>
            <Link
                to={"/cosmoslines"}
                style={{ transition: "border 200ms ease-in-out" }}
                className='border-[1px] border-r-gray-300 hover:border-gray-500 rounded-lg px-[1.5rem] py-[0.75rem] font-[600]'
            >
                Cosmos Lines
            </Link>
        </div>
    )
}

export default GamesList