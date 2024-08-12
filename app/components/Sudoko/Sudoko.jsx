// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './sudoko.css';

// function App() {
//     const initialGrid = [
//         [5, 3, '', '', 7, '', '', '', ''],
//         [6, '', '', 1, 9, 5, '', '', ''],
//         ['', 9, 8, '', '', '', '', 6, ''],
//         [8, '', '', '', 6, '', '', '', 3],
//         [4, '', '', 8, '', 3, '', '', 1],
//         [7, '', '', '', 2, '', '', '', 6],
//         ['', 6, '', '', '', '', 2, 8, ''],
//         ['', '', '', 4, 1, 9, '', '', 5],
//         ['', '', '', '', 8, '', '', 7, 9],
//     ];

//     // const initialGrid = [
//     //     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     //     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     //     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     //     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     //     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     //     [3, 4, 5, 2, 8, 6, 1, 7, 9],
//     // ];

//     const [grid, setGrid] = useState(initialGrid);
//     const [errors, setErrors] = useState([]);
//     const [isWin, setIsWin] = useState(false);

//     const handleInputChange = (value, rowIndex, colIndex) => {
//         const newGrid = [...grid];
//         newGrid[rowIndex][colIndex] = value ? parseInt(value) : '';
//         setGrid(newGrid);
//     };

//     const checkSudogo = () => {
//         const newErrors = [];

//         // Check rows and columns
//         for (let i = 0; i < 9; i++) {
//             const row = new Set();
//             const col = new Set();
//             for (let j = 0; j < 9; j++) {
//                 if (grid[i][j] !== '' && row.has(grid[i][j])) {
//                     newErrors.push({ type: 'row', index: i });
//                 }
//                 if (grid[j][i] !== '' && col.has(grid[j][i])) {
//                     newErrors.push({ type: 'column', index: i });
//                 }
//                 row.add(grid[i][j]);
//                 col.add(grid[j][i]);
//             }
//         }

//         // Check 3x3 sub-grids
//         for (let row = 0; row < 9; row += 3) {
//             for (let col = 0; col < 9; col += 3) {
//                 const subGrid = new Set();
//                 for (let i = row; i < row + 3; i++) {
//                     for (let j = col; j < col + 3; j++) {
//                         if (grid[i][j] !== '' && subGrid.has(grid[i][j])) {
//                             newErrors.push({ type: 'subgrid', row, col });
//                         }
//                         subGrid.add(grid[i][j]);
//                     }
//                 }
//             }
//         }

//         setErrors(newErrors);

//         // Check if the grid is fully filled and has no errors
//         const isComplete = grid.every(row => row.every(cell => cell !== ''));
//         if (isComplete && newErrors.length === 0) {
//             setIsWin(true);
//         } else {
//             setIsWin(false);
//         }
//     };

//     useEffect(() => {
//         checkSudogo();
//     }, [grid]);

//     const isRowError = (rowIndex) => errors.some(e => e.type === 'row' && e.index === rowIndex);
//     const isColumnError = (colIndex) => errors.some(e => e.type === 'column' && e.index === colIndex);
//     const isSubGridError = (rowIndex, colIndex) => {
//         return errors.some(e =>
//             e.type === 'subgrid' &&
//             rowIndex >= e.row && rowIndex < e.row + 3 &&
//             colIndex >= e.col && colIndex < e.col + 3
//         );
//     };

//     return (
//         <div className="sudoko_app">
//             <div className="sudoko_grid shadow-md">
//                 {grid.map((row, rowIndex) => (
//                     <div
//                         key={rowIndex}
//                         className={`sudoko_row ${isRowError(rowIndex) ? 'error-row' : ''}`}
//                         style={{ borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex != 8 ? "2px solid black" : null }}
//                     >
//                         {row.map((value, colIndex) => (
//                             <input
//                                 key={colIndex}
//                                 type="number"
//                                 min="1"
//                                 max="9"
//                                 value={value}
//                                 onChange={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
//                                 className={`sudoko_cell ${isColumnError(colIndex) ? 'error-column' : ''
//                                     } ${isSubGridError(rowIndex, colIndex) ? 'error-subgrid' : ''
//                                     }`}
//                                 disabled={initialGrid[rowIndex][colIndex] !== ''}
//                                 style={{ borderRight: (colIndex + 1) % 3 === 0 && colIndex != 8 ? "2px solid black" : null }}
//                             />
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             {isWin ?
//                 <div>
//                     <div className='font_josefinsans font-medium'>
//                         <div className="win-message">Congratulations! You have completed the Sudoku!</div>
//                     </div>
//                     <motion.button whileTap={{ scale: 0.9 }} className='p-2 font-medium border-[1px] solid border-black rounded-md my-2 bg-[lightgreen]'>
//                         New Game
//                     </motion.button>
//                 </div> : null
//             }
//         </div>
//     );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './sudoko.css';

// function App() {
//     const initialGrid = [
//         [5, 3, '', '', 7, '', '', '', ''],
//         [6, '', '', 1, 9, 5, '', '', ''],
//         ['', 9, 8, '', '', '', '', 6, ''],
//         [8, '', '', '', 6, '', '', '', 3],
//         [4, '', '', 8, '', 3, '', '', 1],
//         [7, '', '', '', 2, '', '', '', 6],
//         ['', 6, '', '', '', '', 2, 8, ''],
//         ['', '', '', 4, 1, 9, '', '', 5],
//         ['', '', '', '', 8, '', '', 7, 9],
//     ];

//     const [grid, setGrid] = useState(initialGrid);
//     const [errors, setErrors] = useState([]);
//     const [isWin, setIsWin] = useState(false);
//     const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

//     const handleInputChange = (value) => {
//         if (selectedCell.row !== null && selectedCell.col !== null) {
//             const newGrid = [...grid];
//             newGrid[selectedCell.row][selectedCell.col] = value;
//             setGrid(newGrid);
//         }
//     };

//     const checkSudoko = () => {
//         const newErrors = [];

//         // Check rows and columns
//         for (let i = 0; i < 9; i++) {
//             const row = new Set();
//             const col = new Set();
//             for (let j = 0; j < 9; j++) {
//                 if (grid[i][j] !== '' && row.has(grid[i][j])) {
//                     newErrors.push({ type: 'row', index: i });
//                 }
//                 if (grid[j][i] !== '' && col.has(grid[j][i])) {
//                     newErrors.push({ type: 'column', index: i });
//                 }
//                 row.add(grid[i][j]);
//                 col.add(grid[j][i]);
//             }
//         }

//         // Check 3x3 sub-grids
//         for (let row = 0; row < 9; row += 3) {
//             for (let col = 0; col < 9; col += 3) {
//                 const subGrid = new Set();
//                 for (let i = row; i < row + 3; i++) {
//                     for (let j = col; j < col + 3; j++) {
//                         if (grid[i][j] !== '' && subGrid.has(grid[i][j])) {
//                             newErrors.push({ type: 'subgrid', row, col });
//                         }
//                         subGrid.add(grid[i][j]);
//                     }
//                 }
//             }
//         }

//         setErrors(newErrors);

//         // Check if the grid is fully filled and has no errors
//         const isComplete = grid.every(row => row.every(cell => cell !== ''));
//         if (isComplete && newErrors.length === 0) {
//             setIsWin(true);
//         } else {
//             setIsWin(false);
//         }
//     };

//     useEffect(() => {
//         checkSudoko();
//     }, [grid]);

//     const isRowError = (rowIndex) => errors.some(e => e.type === 'row' && e.index === rowIndex);
//     const isColumnError = (colIndex) => errors.some(e => e.type === 'column' && e.index === colIndex);
//     const isSubGridError = (rowIndex, colIndex) => {
//         return errors.some(e =>
//             e.type === 'subgrid' &&
//             rowIndex >= e.row && rowIndex < e.row + 3 &&
//             colIndex >= e.col && colIndex < e.col + 3
//         );
//     };

//     return (
//         <div className="sudoko_app">
//             <div className="sudoko_grid shadow-md">
//                 {grid.map((row, rowIndex) => (
//                     <div
//                         key={rowIndex}
//                         className={`sudoko_row ${isRowError(rowIndex) ? 'error-row' : ''}`}
//                         style={{ borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? "2px solid black" : null }}
//                     >
//                         {row.map((value, colIndex) => (
//                             <div
//                                 key={colIndex}
//                                 className={`sudoko_cell ${isColumnError(colIndex) ? 'error-column' : ''} ${isSubGridError(rowIndex, colIndex) ? 'error-subgrid' : ''} ${selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}`}
//                                 onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
//                                 style={{ borderRight: (colIndex + 1) % 3 === 0 && colIndex !== 8 ? "2px solid black" : null }}
//                             >
//                                 {value}
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className="button-grid">
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
//                     <motion.button
//                         key={num}
//                         whileTap={{ scale: 0.9, background: '#d3d3d3' }}
//                         onClick={() => handleInputChange(num)}
//                         className="sudoko_number_btn"
//                     >
//                         {num}
//                     </motion.button>
//                 ))}
//             </div>
//             {isWin ?
//                 <div>
//                     <div className='font_josefinsans font-medium'>
//                         <div className="win-message">Congratulations! You have completed the Sudoku!</div>
//                     </div>
//                     <motion.button whileTap={{ scale: 0.9 }} className='p-2 font-medium border-[1px] solid border-black rounded-md my-2 bg-[lightgreen]'>
//                         New Game
//                     </motion.button>
//                 </div> : null
//             }
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './sudoko.css';

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

    const [grid, setGrid] = useState(initialGrid);
    const [errors, setErrors] = useState([]);
    const [isWin, setIsWin] = useState(false);
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    const handleInputChange = (value) => {
        if (selectedCell.row !== null && selectedCell.col !== null) {
            const { row, col } = selectedCell;

            // Prevent removal if the cell is part of the initial grid
            if (initialGrid[row][col] !== '') {
                return;
            }

            const newGrid = [...grid];
            newGrid[row][col] = value;
            setGrid(newGrid);
        }
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
        <div className="sudoko_app">
            <div className="sudoko_grid shadow-md">
                {grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`sudoko_row ${isRowError(rowIndex) ? 'error-row' : ''}`}
                        style={{ borderBottom: (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? "2px solid black" : null }}
                    >
                        {row.map((value, colIndex) => (
                            <button
                                key={colIndex}
                                className={`sudoko_cell ${isColumnError(colIndex) ? 'error-column' : ''} ${isSubGridError(rowIndex, colIndex) ? 'error-subgrid' : ''} ${selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}`}
                                onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                                style={{
                                    borderRight: (colIndex + 1) % 3 === 0 && colIndex !== 8 ? "2px solid black" : null,
                                    backgroundColor: selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'aqua' : null,
                                    // backgroundColor: initialGrid[rowIndex][colIndex] !== '' ? '#f0f0f0' : selectedCell.row === rowIndex && selectedCell.col === colIndex ? '#add8e6' : '',
                                }}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="button-grid flex_center flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <motion.button
                        key={num}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInputChange(num)}
                        className="number-button sudoko_number_btn"
                    >
                        {num}
                    </motion.button>
                ))}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleInputChange('')}
                    className="number-button remove-button sudoko_number_rmbtn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                    </svg>
                </motion.button>
            </div>
            {isWin ?
                <div>
                    <div className='font_josefinsans font-medium'>
                        <div className="win-message my-2">Congratulations! You have completed the Sudoku!</div>
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