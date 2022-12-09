import React from 'react'
import './App.css'
import Quiz from "./quiz"

function App() {


  return (
    <div >
      <form >
        <button  className='start-button' formaction={"Quiz"}>Start quiz</button>
      </form>
      <Quiz/>
    </div>
  )
}

export default App
