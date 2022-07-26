const Details = ({ title, situation, task, action, result }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <span>S</span>
        <p>{situation}</p>
      </div>
      <div>
        <span>T</span>
        <p>{task}</p>
      </div>
      <div>
        <span>A</span>
        <p>{action}</p>
      </div>
      <div>
        <span>R</span>
        <p>{result}</p>
      </div>
    </>
  );
};

export default Details;
