import React from "react";
import { questions_list } from "./Questions";
import { useState } from "react";
import './design/TestInterface.css'

var anslist = []
// for(var i = 0;i<questions_list.length;i++){
//     anslist.push(5);
// }
// const [answers_entered, setAnswers] = useState(anslist);

function TestInterface(){
    const [current_q, set_q] = useState(0);
    const anslist = []
    for(var i = 0;i<questions_list.length;i++){
        anslist.push(5);
    }
    const [answers_entered, setAnswers] = useState(anslist);
    const changeAnswers = () =>{
        const newAnswer = answers_entered.map((c, i) => {
            if (i === current_q) {
              return selected_value;
            } else {
              return c;
            }
          });
          setAnswers(newAnswer);
    }
    const [selected_value, setSelected] = useState(5);
    const handleNextClick = () =>{
        setSelected(5);
        changeAnswers();
        if(current_q<questions_list.length-1){
            // current_q = current_q+1;
            set_q(current_q+1);
        }
        // console.log(answers_entered);
    }
    const handlePrevClick = () =>{
        setSelected(5);
        changeAnswers();
        if(current_q>0){
            set_q(current_q-1);
        }
        // console.log(answers_entered);
    }
    const handleRadioChange = (value) =>{
        setSelected(value);
    }

    const handleSubmit = () =>{
        // anslist = answers_entered;
        console.log(answers_entered);
    }

    return(
        <div className="test-interface">
            <div className="quest">
                <div>
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
                </div>
                <br/>
                <div className="prev-button">
                    <button onClick={handlePrevClick} >Previous</button>
                </div>
                <div className="next-button">
                    <button onClick={handleNextClick} >Next</button>
                </div>
                
            </div>
            <br/>
            <br/>

            <div className="submit-button">
                <button onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export {
    TestInterface,
    anslist
}
// export default TestInterface;
// export answers_entered;