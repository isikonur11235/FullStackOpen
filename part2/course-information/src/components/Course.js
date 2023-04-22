import Header from './Header'
import Content from './Content'

const Course =({courses})=>{

    return(
    
    
      courses.map(course => {
    
        return(
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
          </div>
        )
      })
)}
export default Course