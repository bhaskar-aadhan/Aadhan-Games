import { useState } from "react";
import './sudoko.css';

export default function Sudoko({ sudokoData }) {
    const [grid, setGrid] = useState(sudokoData);
    const [selection, setSelection] = useState(sudokoData);
    const sudokoCol = Array(9).fill("-")
    const handleBtn = (e) => {
        setSelection(e.target.value)
    }

    const handleSudokoCell = (row, col) => {
        // sudokoCol[row][col] = selection
        sudokoCol[col] = selection
        console.log(sudokoCol[row][col], sudokoCol[col])
    }

    function handleChange(e, row, col) {
        const newGrid = grid.map((r) => [...r]);
        newGrid[row][col] = e.target.value;
        setGrid(newGrid);
    }

    console.log("grid: ", grid, sudokoCol,selection)
    return (
        <div className="flex_col_center pt-[3rem] px-2 gap-5">
            <table className="border-[3px] border-solid border-gray-500 rounded-lg">
                <tbody>
                    {Array(9).fill("").map((row, rowI) => {
                        return (
                            <tr key={rowI} id={`${rowI}`} className={`${rowI} ${(rowI + 1) % 3 === 0 && rowI != 8 ? "sudoko_row_border" : ""}`}>
                                {sudokoCol.map((col, colI) => {
                                    return (
                                        <td onClick={() => handleSudokoCell(rowI, colI)} key={colI} id={`${rowI}-${colI}`} className={`${rowI}-${colI} w-[40px] h-[40px] ${(colI + 1) % 3 === 0 && colI != 8 ? "sudoko_col_border" : ""} border-[1.5px] border-solid border-y-gray-300  text-center`}>
                                            {col}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="flex_center border">
                <button value={"1"} onClick={handleBtn} className="border-[1.5px] border-solid border-y-gray-300 p-2 w-[50px] h-[50px text-center flex_center]">1</button>
                <button value={"2"} onClick={handleBtn} className="border-[1.5px] border-solid border-y-gray-300 p-2 w-[50px] h-[50px text-center flex_center]">2</button>
                <button value={"3"} onClick={handleBtn} className="border-[1.5px] border-solid border-y-gray-300 p-2 w-[50px] h-[50px text-center flex_center]">3</button>
                <button value={"4"} onClick={handleBtn} className="border-[1.5px] border-solid border-y-gray-300 p-2 w-[50px] h-[50px text-center flex_center]">4</button>
                <button value={"5"} onClick={handleBtn} className="border-[1.5px] border-solid border-y-gray-300 p-2 w-[50px] h-[50px text-center flex_center]">5</button>
            </div>
        </div>
    );
}