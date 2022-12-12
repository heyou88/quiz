import React from 'react'
export default function Question(props){
  console.log(props.quizdata[0])
  const quizies= props.quizdata
  const quiz= quizies.map(item=> {
    return(
      <div>
        <h1>{item.question}</h1>
        <h1>{item.correct_answer}</h1>
      </div>)
  })
  return(
  <div>
    {quiz}
    <pre>{JSON.stringify(quiz, null, 2)}</pre>
  </div>
  )
}
