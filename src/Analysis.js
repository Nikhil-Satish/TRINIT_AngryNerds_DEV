import React, { useEffect, useState } from "react";
// import answer_key from "./AnswerKey";
import { questions_list } from "./Questions";
import { PieChart } from "react-minimal-pie-chart";

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
                    if(answer_entered[i] === questions_list[i].answer.toString()){
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
      <div className="container">
        <div className="table-responsive">
            <table className="mx-auto table w-auto table-bordered">
                <tbody>
                    <tr className="table-info">
                        <th scope="row">Postive Score</th>
                        <td>{correctly_ans*4}</td>
                    </tr>

                    <tr className="table-danger">
                        <th scope="row">Negative Score</th>
                        <td>{incorrectly_ans*-1}</td>
                    </tr>

                    <tr className="table-success">
                        <th scope="row">Total Score</th>
                        <td>{correctly_ans*4-incorrectly_ans}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <PieChart className="pie"
                data={[
                    { title: "Correct", value: correctly_ans, color: '#00ff00' },
                    { title: "Incorrect", value: incorrectly_ans, color: '#ff0000' },
                    { title: "Unattempted", value: unatt, color: '#777' },
                ]}
                animate
                animateDuration={40}
                radius={20}
            />
        </div>
      </div>
    )
}

export default Analysis;

