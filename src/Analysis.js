import React, { useEffect, useState } from "react";
// import answer_key from "./AnswerKey";
import { questions_list } from "./Questions";
// import { anslist } from "./TestInterface";

function Analysis(props){
    const answer_entered = props.anslist;
    const [correctly_ans, setCorrectly] = useState(0);
    const [incorrectly_ans, setIncorrectly] = useState(0);
    useEffect(() => {
        const update_correct = () =>{
            var corr = 0;
            var incor = 0
            for(var i = 0;i<questions_list.length;i++){
                if(questions_list[i].options.length !== 0){
                    if(answer_entered[i] === questions_list[i].answer-1){
                        corr+=1;
                    }
                    else if(answer_entered[i] !== 5){
                        incor += 1;
                    }
                }
                else{
                    if(answer_entered[i] === questions_list[i].answer){
                        corr+=1;
                    }
                    else if(answer_entered !== 5){
                        incor +=1;
                    }
                }
            }
            setCorrectly(corr);
            setIncorrectly(incor);
        }
        update_correct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <div>
            <p>No. of questions answered correctly={correctly_ans}</p>
            <p>No. of questions answered incorrectly={incorrectly_ans}</p>
        </div>
    )
}

export default Analysis;

