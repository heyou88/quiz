import React from 'react'
export default function Answers(props){

let answers = props.answers.split(",")
for (let i = answers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
  [answers[i], answers[j]] = [answers[j],answers[i]]; // Swap elements at index i and j
}

const formatAnswers = answers.map(item => {
  return(
    <div  className='answers'>
      <div>{item}</div>
   </div>
  )
})








  return(
  <div>
    <h3>{formatAnswers}</h3>
    {console.log(answers)}
    {console.log(props)}
    {/* {quiz}
    <pre>{JSON.stringify(quiz, null, 2)}</pre> */}
  </div>
  )
}
