import React from "react";
import { questions_list } from "./Questions";
import { useState } from "react";
import './design/TestInterface.css'
import Analysis from "./Analysis";
// import Timer from "./Timer";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { MathJax } from "better-react-mathjax";
import Latex from "react-latex";

function TestInterface(){
    const [current_q, set_q] = useState(0);
    const [q_no, set_q_no] = useState("1. ");
    const anslist = []
    const ts = [];
    for(var i = 0;i<questions_list.length;i++){
        anslist.push(5);
        ts.push(0);
    }
    // const [isNumerical, setNume] = useState(questions_list[current_q].options === 0);
    const [enteredValue, setEnter] = useState("");
    const [answers_entered, setAnswers] = useState(anslist);
    // const [time_spent, setTimeSpent] = useState(ts);

    const [submitted, setSubmit] = useState(false);

    const changeAnswers = () =>{
        const newAnswer = answers_entered.map((c, i) => {
            if (i === current_q) {
                if(enteredValue !== ""){
                    return enteredValue;
                }
                else{
                    // console.log("Hola");
                    return selected_value;
                }
            } else {
              return c;
            }
          });
          setAnswers(newAnswer);
    }

    const [selected_value, setSelected] = useState(5);

    const handleNextClick = () =>{
        setSelected(5);
        setEnter("");
        changeAnswers();
        // setSelected(answers_entered[current_q])
        if(current_q<questions_list.length-1){
            const next_q = current_q+1;
            set_q(next_q);
            const next_str = (next_q+1).toString()+". ";
            set_q_no(next_str);
        }
    }

    const handlePrevClick = () =>{
        setSelected(5);
        setEnter("");
        changeAnswers();
        // setSelected(answers_entered[current_q])
        if(current_q>0){
            const next_q = current_q-1;
            set_q(next_q);
            const next_str = (next_q+1).toString()+". ";
            set_q_no(next_str);
        }
    }
    const handleRadioChange = (value) =>{
        setSelected(value);
    }

    const handleSubmit = () =>{
        // anslist = answers_entered;
        // console.log(answers_entered);
        setSubmit(true);
    }

    return(
        <div>
            {!submitted && 
                <div>
                <div className='timer'>
                    {/* <Timer /> */}
                    <CountdownCircleTimer
                        isPlaying
                        duration={70}
                        size={90}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[300, 60, 15, 0]}
                        onComplete={handleSubmit}
                    >
                    
                        {/* {({ remainingTime }) => remainingTime} */}
                        {({ remainingTime }) => {
                            const hours = Math.floor(remainingTime / 3600)
                            let hh = String(hours).padStart(2,'0');
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            let mm = String(minutes).padStart(2,'0');
                            const seconds = remainingTime % 60
                            let sec = String(seconds).padStart(2,'0');
                        
                            return `${hh}:${mm}:${sec}`
                        }}
                    </CountdownCircleTimer>

                </div>
                    <div className="d-flex flex-column container test-interface">
                        <div className="mx-auto quest">
                              <div className="question-box">
                                  <div className="question">
                                      <p>{q_no}<Latex>{questions_list[current_q].question}</Latex></p>
                                  </div>

                                  <div className="numerical">
                                      {questions_list[current_q].options.length === 0 &&
                                          <input 
                                              type="text"
                                              value={enteredValue}
                                              onChange={(e)=>setEnter(e.target.value)}
                                          /> 
                                      }
                                  </div>

                                  <div className="options">
                                      {questions_list[current_q].options.length !== 0 &&
                                          <ul className="options">
                                              {questions_list[current_q].options.map((option, optionIndex) => (
                                              <li key={optionIndex} className="option">
                                                      <input
                                                          type="radio"
                                                          id={optionIndex} 
                                                          value={option} 
                                                          checked={selected_value === optionIndex}
                                                          onChange={()=>handleRadioChange(optionIndex)}
                                                      />
                                                  <label for={optionIndex}>
                                                      {option}
                                                  </label>
                                              </li>
                                              ))}
                                          </ul>
                                      }
                                  </div>
                              </div>

                            <div className="navigation">
                                <button className="btn btn-primary" onClick={handlePrevClick} >Previous</button>
                                <button className="btn btn-success" onClick={handleNextClick} >Save and Next</button>
                                {/* <Analysis anslist="Lolol" /> */}
                            </div>
                            
                        </div>

                        <div className="submit-button mx-auto">
                            <button className="btn btn-danger" onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
                
            }
            {submitted && <Analysis anslist={answers_entered} />}
        </div>
    )
}

export default TestInterface;
