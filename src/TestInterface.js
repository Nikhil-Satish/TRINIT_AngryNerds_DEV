import React from "react";
import { questions_list } from "./Questions";
import { useState } from "react";

function TestInterface(){
    const [current_q_no, set_q_no] = useState(0);

    return(
        <div className="test-interface">
            <p>{questions_list[current_q_no].question}</p>
            <ul className="options">
                {questions_list[current_q_no].options.map((option, optionIndex) => (
                <li key={optionIndex}>
                    <label>
                    <input type="radio" value={option} />
                    {option}
                    </label>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TestInterface;