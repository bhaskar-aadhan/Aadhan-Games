import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './sudoko3.css';

function App() {
    const initialGrid = [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9],
    ];

    // const initialGrid = [
    //     [5, 3, 4, 6, 7, 8, 9, 1, 2],
    //     [6, 7, 2, 1, 9, 5, 3, 4, 8],
    //     [1, 9, 8, 3, 4, 2, 5, 6, 7],
    //     [8, 5, 9, 7, 6, 1, 4, 2, 3],
    //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
    //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
    //     [9, 6, 1, 5, 3, 7, 2, 8, 4],
    //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
    //     [3, 4, 5, 2, 8, 6, 1, 7, 9],
    // ];

    const [grid, setGrid] = useState(initialGrid);
    const [errors, setErrors] = useState([]);
    const [isWin, setIsWin] = useState(false);

    const handleInputChange = (value, rowIndex, colIndex) => {
        const newGrid = [...grid];
        newGrid[rowIndex][colIndex] = value ? parseInt(value) : '';
        setGrid(newGrid);
    };

    const checkSudogo = () => {
        const newErrors = [];

        // Check rows and columns
        for (let i = 0; i < 9; i++) {
            const row = new Set();
            const col = new Set();
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] !== '' && row.has(grid[i][j])) {
                    newErrors.push({ type: 'row', index: i });
                }
                if (grid[j][i] !== '' && col.has(grid[j][i])) {
                    newErrors.push({ type: 'column', index: i });
                }
                row.add(grid[i][j]);
                col.add(grid[j][i]);
            }
        }

        // Check 3x3 sub-grids
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                const subGrid = new Set();
                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        if (grid[i][j] !== '' && subGrid.has(grid[i][j])) {
                            newErrors.push({ type: 'subgrid', row, col });
                        }
                        subGrid.add(grid[i][j]);
                    }
                }
            }
        }

        setErrors(newErrors);

        // Check if the grid is fully filled and has no errors
        const isComplete = grid.every(row => row.every(cell => cell !== ''));
        if (isComplete && newErrors.length === 0) {
            setIsWin(true);
        } else {
            setIsWin(false);
        }
    };

    useEffect(() => {
        checkSudogo();
    }, [grid]);

    const isRowError = (rowIndex) => errors.some(e => e.type === 'row' && e.index === rowIndex);
    const isColumnError = (colIndex) => errors.some(e => e.type === 'column' && e.index === colIndex);
    const isSubGridError = (rowIndex, colIndex) => {
        return errors.some(e =>
            e.type === 'subgrid' &&
            rowIndex >= e.row && rowIndex < e.row + 3 &&
            colIndex >= e.col && colIndex < e.col + 3
        );
    };

    return (
        <div className="App">
            <div className="grid shadow-md">
                {grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`row ${isRowError(rowIndex) ? 'error-row' : ''}`}
                        style={{ borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex != 8 ? "2px solid black" : null }}
                    >
                        {row.map((value, colIndex) => (
                            <input
                                key={colIndex}
                                type="number"
                                min="1"
                                max="9"
                                value={value}
                                onChange={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
                                className={`cell ${isColumnError(colIndex) ? 'error-column' : ''
                                    } ${isSubGridError(rowIndex, colIndex) ? 'error-subgrid' : ''
                                    }`}
                                disabled={initialGrid[rowIndex][colIndex] !== ''}
                                style={{ borderRight: (colIndex + 1) % 3 === 0 && colIndex != 8 ? "2px solid black" : null }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {isWin ?
                <div>
                    <div className='font_josefinsans font-medium'>
                        <div className="win-message">Congratulations! You have completed the Sudoku!</div>
                    </div>
                    <motion.button whileTap={{ scale: 0.9 }} className='p-2 font-medium border-[1px] solid border-black rounded-md my-2 bg-[lightgreen]'>
                        New Game
                    </motion.button>
                </div> : null
            }
        </div>
    );
}

export default App;