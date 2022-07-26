const Details = ({ title, situation, task, action, result }) => {
  return (
    <div>
      <h1 className="text-6xl">{title}</h1>
      <div>
        <span className="text-red-600 font-bold text-6xl">S</span>
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
    </div>
  );
};

export default Details;
