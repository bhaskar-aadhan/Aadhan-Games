import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { Sudoko, Sudoko3 } from '../components/Sudoko';
import { generateSudoku } from '../services/sudoko';

export const loader = () => {
    const sudokoData = generateSudoku();
    return json({ sudokoData })
}

const SudokoRoute = () => {
    const { sudokoData } = useLoaderData()
    return (
        // <Sudoko sudokoData={sudokoData} />
        <Sudoko3 sudokoData={sudokoData} />
    )
}

export default SudokoRoute