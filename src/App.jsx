import React from 'react'
import './App.css'
import Quiz from "./components/quiz"

function App() {
  const[start,SetStart]=React.useState(false)

  function Start(){
    SetStart(prev=>!prev)
  }

  return (
    <main>
      {start?
        <Quiz/>
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
