const scoreRanks = [
    { min: 102, rank: "Genius" },
    { min: 73, rank: "Amazing" },
    { min: 58, rank: "Great" },
    { min: 36, rank: "Nice" },
    { min: 22, rank: "Solid" },
    { min: 12, rank: "Good" },
    { min: 7, rank: "Moving Up" },
    { min: 3, rank: "Good Start" },
    { min: 0, rank: "Beginner" }
];

export const getUserLevelData = (score) => {
    for (const { min, rank } of scoreRanks) {
        if (score >= min) {
            console.log("rank: ", score, min, rank)
            return rank;
        }
    }
    return "Beginner";
}

export const scoreValidator = (word) => {
    if (word.length >= 4) {
        return word.length
    } else if (word.length === 7) {
        return 7
    }
}