const Header = (props) => {
  return (
    <div>
     <p>{props.course.name}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  );
};

const Content = (props) => {
  const parts = props.content.parts;
  const contents = [];

  parts.forEach((part, index) => {
      let content = <Part key={index} name={part.name} exercises={part.exercises} />
      contents.push(content);
  });

  return (
  <div>
  {contents}
  </div>
  )
}

const Total = (props) => {
  let sum = 0;
  props.sum.parts.forEach(part => {
    sum = sum + part.exercises
  })
  return (
    <div>
     <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      <Header course={course} />
      <Content content={course} />
      <Total sum={course} />
    </div>
  )
}

export default App