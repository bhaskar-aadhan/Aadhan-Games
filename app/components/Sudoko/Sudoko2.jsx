import { useState } from "react";
import './sudoko.css';

export default function Sudoko({ sudokoData }) {
    const [grid, setGrid] = useState(sudokoData);

    function handleChange(e, row, col) {
        const newGrid = grid.map((r) => [...r]);
        newGrid[row][col] = e.target.value;
        setGrid(newGrid);
    }

    console.log("grid: ", grid)
    return (
        <div className="flex_center pt-[3rem]">
            {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 35px)", gap: "5px" }} className="rounded-md justify-center">

                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                    +    <input
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onChange={(e) => handleChange(e, rowIndex, colIndex)}
                            style={{ width: "35px", height: "35px", textAlign: "center", fontSize: "18px" }}
                            className="border-[1px] border-gray-500 rounded-md"
                        />
                    ))
                )}
            </div> */}
            <div className="border-[2px] border-solid border-gray-500 shadow-lg">
                <table className="">
                    <tbody>
                        {grid.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex} className={`${(rowIndex + 1) % 3 === 0 && rowIndex != 8 ? 'sudoko_row_border' : ''}`}>
                                    {row.map((cell, colIndex) => (
                                        <td key={`${rowIndex}-${colIndex}`} className={`${(colIndex + 1) % 3 === 0 && colIndex != 8 ? 'sudoko_col_border' : ''}`}>
                                            <input
                                                value={cell}
                                                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                                                style={{ width: "35px", height: "35px", textAlign: "center", fontSize: "18px" }}
                                                className={`border-[1px] border-[#d3d3d3] ${!!cell ? "bg-[#d3d3d3] font-semibold" : ""}`}
                                                // disabled={!!cell}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}