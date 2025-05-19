
const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part {...props.parts[0]}></Part>
    <Part {...props.parts[1]}></Part>
    <Part {...props.parts[2]}></Part>
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Total = (props) => {
  const total = props.parts.reduce((accumulator, current) => accumulator + current.exercises, 0);
  return <p>Number of exercises {total}</p>
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App