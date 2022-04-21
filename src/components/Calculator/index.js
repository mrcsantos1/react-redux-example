import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Calculator() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <>
            <div>
                <input type="text" placeholder='a' value={a} onChange={(e) => { setA(parseFloat(e.target.value)) }} />
                <input type="text" placeholder='b' value={b} onChange={(e) => { setB(parseFloat(e.target.value)) }} />
            </div>

            <div>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'SUM',
                            payload: [a, b]
                        });
                    }}
                >
                    sum
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'SUB',
                            payload: [a, b]
                        });
                    }}
                >
                    sub
                </button>
            </div>

            <div>
                {result}
            </div>
        </>
    );
}

export default Calculator;