import React, { useEffect, useState } from "react";
// import answer_key from "./AnswerKey";
import { questions_list } from "./Questions";

function Analysis(props){
    const answer_entered = props.anslist;
    console.log(answer_entered);
    const [correctly_ans, setCorrectly] = useState(0);
    const [incorrectly_ans, setIncorrectly] = useState(0);
    const [unatt, setUnat] = useState(0);
    useEffect(() => {
        const update_correct = () =>{
            var corr = 0;
            var incor = 0;
            var unattempt = 0;
            for(var i = 0;i<questions_list.length;i++){
                if(questions_list[i].options.length !== 0){
                    if(answer_entered[i] === questions_list[i].answer-1){
                        corr+=1;
                    }
                    else if(answer_entered[i] !== 5){
                        incor += 1;
                        // unattempt+=1
                    }
                }
                else{
                    if(answer_entered[i] === questions_list[i].answer){
                        corr+=1;
                    }
                    // else if(answer_entered === 5){
                    //     // incor +=1;
                    //     unattempt+=1;
                    // }
                }
            }
            setCorrectly(corr);
            setIncorrectly(incor);
            setUnat(questions_list.length-corr-incor);
        }
        update_correct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <div>
            {/* <p>No. of questions answered correctly={correctly_ans}</p>
            <p>No. of questions answered incorrectly={incorrectly_ans}</p>
            <p>No. of questions not answered={unatt}</p> */}
            <p>Positive Score: {correctly_ans*4}</p>
            <p>Negative Score: {incorrectly_ans*-1}</p>
            <p>Total score: {correctly_ans*4-incorrectly_ans*1}</p>
        </div>
    )
}

export default Analysis;

