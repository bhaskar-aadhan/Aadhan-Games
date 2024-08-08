export function generateSudoku() {
    // Generate a random puzzle (this is just a placeholder for a more complex generation)
    const grid = Array.from({ length: 9 }, () => Array(9).fill(""));
    for (let i = 0; i < 20; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        grid[row][col] = Math.floor(Math.random() * 9) + 1;
    }
    return grid;
}