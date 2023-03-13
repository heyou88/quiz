import React from 'react'
import './App.css'
import Quiz from "./components/quiz"

function App() {
  const[start,SetStart]=React.useState(false)
  const [quizData, setQuizData] = React.useState({})


  function Start(){
    SetStart(prev=>!prev)
  }

  React.useEffect(()=>{
    async function getQuiz() {
     const res = await fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
     const data = await res.json()
    setQuizData(data.results)
   }
   getQuiz();
 },[]
 )

  return (
    <main>
      {start?
        <Quiz quizData={quizData}/>
        :
      <div >
        <div>
          <button onClick={Start}  className='start-button' >Start quiz</button>
        </div>
      </div>
    }
    </main>
)
}
export default App
