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
    // const string_to_html = (str) =>{
    //     const parser = new DOMParser()
    //     // const html = parser.parseFromString("<Latex>{\"$3 d^{3}$\"}</Latex>",'text/html');
    //     const html = parser.parseFromString(str,'text/html');
    //     return html.body;
    // }
    // var opts = [];
    // for(i = 0;i<questions_list.length;i++){
    //     var choices = questions_list[i].options;
    //     if(choices.length === 0){
    //         // opts.push([]);
    //     }
    //     else{
    //         // opts.push()
    //         for(var j = 0;j<choices.length;j++){
    //             var opt = choices[j];
    //             var opt_new = string_to_html(opt);
    //             // opts.push(opt_new);
    //             opts = [
    //                 ...opts, opt_new
    //             ]
    //         }
    //     }
    // }
    // const [options, setOptions] = useState(opts);
    const [answers_entered, setAnswers] = useState(anslist);
    // const [time_spent, setTimeSpent] = useState(ts);

    

    // const updateOptions = () =>{
    //     const opts = [];
    //     for(var i = 0;i<questions_list.length;i++){
    //         choices = questions_list[i].options;
    //         if(choices.length === 0){
    //             opts.push([]);
    //         }
    //         else{
    //             // opts.push()
    //             for(var j = 0;j<choices.length;j++){
    //                 var opt = choices[j];
    //                 var opt_new = string_to_html(opt);
    //                 opts.push(opt_new);
    //             }
    //         }
    //     }
    //     return opts;
    // }

    const [submitted, setSubmit] = useState(false);

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
        console.log(answers_entered);
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
                    <div className="test-interface">
                        <div className="quest">
                            <div className="crux">
                                {/* <Latex>{questions_list[current_q].question}</Latex> */}
                                {/* <p>{q_no}{questions_list[current_q].question}</p> */}
                                {/* <p>{opts[0]}</p> */}
                                {/* <ul>
                                    {opts.map((option, optionIndex) =>{

                                    })}
                                </ul> */}
                                <p>{q_no}<Latex>{questions_list[current_q].question}</Latex></p>
                                <br/>
                                <ul className="options">
                                    {questions_list[current_q].options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                            <input
                                                type="radio"
                                                id={optionIndex} 
                                                value={option} 
                                                checked={selected_value === optionIndex}
                                                onChange={()=>handleRadioChange(optionIndex)}
                                            />
                                        {option}
                                        {/* </label> */}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <br/>
                            <div className="prev-button">
                                <button onClick={handlePrevClick} >Previous</button>
                            </div>
                            <div className="next-button">
                                <button onClick={handleNextClick} >Save and Next</button>
                                {/* <Analysis anslist="Lolol" /> */}
                            </div>
                            
                        </div>
                        <br/>
                        <br/>

                        <div className="submit-button">
                            <button onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
                
            }
            {submitted && <Analysis anslist={answers_entered} />}
        </div>
        
        
    )
}

export default TestInterface;
