function Header({ course }) {
  return <h2>{course}</h2>;
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />
      })}
    </div>
  );
}

function Part({ part }) {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
}

function Total({ parts }) {
  const total = parts.reduce((total, part) => total + part.exercises, 0)

  return <strong>total of {total} exercises</strong>;
}

export default function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}