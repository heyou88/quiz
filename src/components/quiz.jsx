import React from 'react'
import Answers from "./quiz questions"
export default function Quiz(props){
  const [restart,setRestart]=React.useState(false)
  const answers = props.quizData
  function Restart(){
    setRestart(prevState=>!prevState)
  }

  const question = props.quizData.map(item=>{
    return(
           <div>
            <h2>{item.question}</h2>
            <Answers answers = {item.incorrect_answers +","+item.correct_answer}/>
          </div>)
  })



 return(

  <div>
    <h3>{question}</h3>
    {/* <pre>{JSON.stringify(quizData, null, 2)}</pre> */}
    {/* <Question
    /> */}
    <button onClick={Restart}>Start again</button>
  </div>

  )
}
