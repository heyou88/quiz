import React from 'react'
export default function Quiz(){
  const [quizData, setQuizData] = React.useState({})
 fetch("https://opentdb.com/api.php?amount=10").then(response=>response.json()).then(data => console.log(data))
  return(

  <div>
    <pre>{JSON.stringify(quizData, null, 2)}</pre>
  </div>

  )
}
