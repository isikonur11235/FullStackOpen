const Header = (props)=>{
  return <h1>{props.course}</h1>
}

const Part =(props)=>{

  return <p>{props.name} {props.number}</p>
}

const Content =(props)=>{
  return (
    <div>

    
    <Part name={props.courses[0].name} number={props.courses[0].exercises}/>
    <Part name={props.courses[1].name} number={props.courses[1].exercises}/>
    <Part name={props.courses[2].name} number={props.courses[2].exercises}/>

    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.courses[0].exercises + props.courses[1].exercises + props.courses[2].exercises}</p>
  )
}


const App = () => {
  const course ={

    name:'Half Stack application development',
    courses:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content courses ={course.courses} />
      <Total courses={course.courses} />
      
    </div>
  )
}

export default App