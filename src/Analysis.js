import React, { useEffect, useState } from "react";
import answer_key from "./AnswerKey";
// import { anslist } from "./TestInterface";

function Analysis(props){
    const answer_entered = props.anslist;
    const [correctly_ans, setCorrectly] = useState(0);
    useEffect(() => {
        const update_correct = () =>{
            var corr = 0;
            for(var i = 0;i<answer_key.length;i++){
                if(answer_entered[i] === answer_key[i]){
                    corr+=1;
                }
            }
            setCorrectly(corr);
        }
        update_correct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <div>
            <p>No. of questions answered correctly={correctly_ans}</p>
            <p>No. of questions answered incorrectly={answer_key.length-correctly_ans}</p>
        </div>
    )
}

export default Analysis;

