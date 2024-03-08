import React from "react";
import { questions_list } from "./Questions";
import { useState } from "react";

function TestInterface(){
    const [current_q, set_q] = useState(0);
    const [selected_value, setSelected] = useState(5);
    const handleNextClick = () =>{
        setSelected(5);
        if(current_q<questions_list.length-1){
            // current_q = current_q+1;
            set_q(current_q+1);
        }
    }
    const handlePrevClick = () =>{
        setSelected(5);
        if(current_q>0){
            set_q(current_q-1);
        }
    }
    const handleRadioChange = (value) =>{
        setSelected(value);
    }

    const handleSubmit = () =>{

    }

    return(
        <div className="test-interface">
            <div className="prev-button">
                <button onClick={handlePrevClick} >Previous</button>
            </div>
            <p>{questions_list[current_q].question}</p>
            <ul className="options">
                {questions_list[current_q].options.map((option, optionIndex) => (
                <li key={optionIndex}>
                    <label>
                    <input
                        type="radio"
                        id={optionIndex} 
                        value={option} 
                        checked={selected_value === optionIndex}
                        onChange={()=>handleRadioChange(optionIndex)}
                     />
                    {option}
                    </label>
                </li>
                ))}
            </ul>
            <div className="next-button">
                <button onClick={handleNextClick} >Next</button>
            </div>
            <div className="submit-button">
                <button onClick={handleSubmit} >Next</button>
            </div>
        </div>
    )
}

export default TestInterface;