
const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part {...props.part1}></Part>
    <Part {...props.part2}></Part>
    <Part {...props.part3}></Part>
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>
  )
}

export default App