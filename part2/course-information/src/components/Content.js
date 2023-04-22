import Part from './Part'
const Content=({course})=>{
    const value = course.parts.reduce((ac,cur) => ac + cur.exercises,0)
    return(
        <>
            {course.parts.map(part => (
          <Part part={part} />
        ))}
        <h3>Total  of {value}</h3>
        </>
        
     
    )
  }
  export default Content