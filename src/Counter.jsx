


import React, { useState } from 'react';
import './Style.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        if (e.target.innerHTML === "Increase") {
            setCount(count + 1);
        } else if (e.target.innerHTML === 'Reset') {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className="d-flex flex-column align-items-center mt-4">
                <div className="text-center">
                    <h1 className={`display-1 ${count > 0 ? "text-success" : "text-danger"} ${count === 0 && "yellow"}`}>
                        {count} 
                    </h1>

                    <div className="mt-4">
                        <button onClick={handleClick} className="btn btn-danger mx-2">Decrease</button>
                        <button onClick={handleClick} className="btn btn-warning mx-2">Reset</button>
                        <button onClick={handleClick} className="btn btn-success mx-2">Increase</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;
