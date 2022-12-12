import React from 'react'
import Question from "./quiz questions"
export default function Quiz(){
  const [restart,setRestart]=React.useState(false)
  function Restart(){
    setRestart(prevState=>!prevState)
  }

  const [quizData, setQuizData] = React.useState({})
 React.useEffect(()=>{
    async function getQuiz() {
     const res = await fetch("https://opentdb.com/api.php?amount=5")
     const data = await res.json()
    setQuizData(data.results)
   }
   getQuiz();
 },[restart]
 )

 return(

  <div>
    <h1>quiz</h1>
    {/* <pre>{JSON.stringify(quizData, null, 2)}</pre> */}
    <Question
    quizdata={quizData} />
    <button onClick={Restart}>Start again</button>
  </div>

  )
}
