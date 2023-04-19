import { useState } from 'react'

const Button=(props)=>{

  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
 
  }

const Display=(props)=>(
  
      props.text !== "positive" ? <p>{props.text} {props.value}</p> : <p>{props.text} {props.value} %</p> 
  
)

const Statistics =(props)=>{

  return(
    <div>
      <Display text="good" value={props.good} />
      <Display text="bad" value={props.bad} />
      <Display text="neutral" value={props.neutral} />
      <Display text="all" value={props.all} />
      <Display text="average" value={props.average} />
      <Display text="positive" value={props.positive} />
    </div>
  )
}

function App() {

  const [good,setGood] = useState(0)
  const [bad,setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average,setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [show, setShow] = useState(false)

  const handleGood = ()=>{

    const goodd = good + 1
    setGood(goodd)
    const alll = all + 1
    setAll(alll)
    const average= (goodd - bad) / alll
    setAverage(average)
    const positive = goodd / alll * 100
    setPositive(positive)
    setShow(true)
    
  }

  const handleBad = ()=>{

    const badd = bad + 1
    setBad(badd)
    const alll = all + 1
    setAll(alll)
    const average= (good - badd) / alll
    setAverage(average)
    const positive = good / alll * 100
    setPositive(positive)
    setShow(true)
  }

  const handleNeutral = ()=>{

    const neutrall = neutral + 1
    setNeutral(neutrall)
    const alll = all + 1
    setAll(alll)
    const average= (good - bad) / alll
    setAverage(average)
    const positive = (good / alll) * 100
    setPositive(positive)
    setShow(true)
  }

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"  />
      <Button handleClick={handleBad} text="bad"  />
      <Button handleClick={handleNeutral} text="neutral" />

      <br />
      <h1>statistics</h1>
      {show ? <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average}
      positive={positive} /> : <p>No feedback</p>}
      
    </div>
  );
}

export default App;
