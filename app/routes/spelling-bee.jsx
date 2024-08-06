import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SpellingBee } from '../components/SpellingBee';
import { shuffleArray } from '../services';

export const loader = () => {
    const letters = {
        hiveLetters: shuffleArray("MDGLBT".split("")),
        centerLetter: "S",
    }
    return json({ letters })
}

const SpellingBeeRoute = () => {
    const { letters } = useLoaderData();
    return <SpellingBee letters={letters} />
}

export default SpellingBeeRoute