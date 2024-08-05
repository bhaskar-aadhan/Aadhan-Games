import { useState } from "react";

export default function Sudoko() {
    const [grid, setGrid] = useState(generateSudoku());

    function handleChange(e, row, col) {
        const newGrid = grid.map((r) => [...r]);
        newGrid[row][col] = e.target.value;
        setGrid(newGrid);
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 35px)", gap: "5px" }} className="rounded-md justify-center">
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <input
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                        onChange={(e) => handleChange(e, rowIndex, colIndex)}
                        style={{ width: "35px", height: "35px", textAlign: "center", fontSize: "18px" }}
                        className="border-[1px] border-gray-500 rounded-md"
                    />
                ))
            )}
        </div>
    );
}

function generateSudoku() {
    // Generate a random puzzle (this is just a placeholder for a more complex generation)
    const grid = Array.from({ length: 9 }, () => Array(9).fill(""));
    for (let i = 0; i < 20; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        grid[row][col] = Math.floor(Math.random() * 9) + 1;
    }
    return grid;
}