import React from 'react'

const HexagonHive = ({ setText }) => {
    const handleHiveBtn = (data) => {
        setText(prev => prev + data)
    }
    return (
        <div className='font_nunito'>
            <div className='w-full flex justify-center'>
                <button onClick={() => { }} className="hexagon">
                    M
                </button>
                <div className="hexagon">
                    D
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className="hexagon">
                    G
                </div>
                <div className="hexagon hexa_central">
                    S
                </div>
                <div className="hexagon">
                    L
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className="hexagon">
                    B
                </div>
                <div className="hexagon">
                    T
                </div>
            </div>
        </div>
    )
}

export default HexagonHive