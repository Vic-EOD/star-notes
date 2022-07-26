import { useParams } from "react-router-dom";
import stories from "./stories";

const Details = () => {
  const { id } = useParams();

  const story = stories.filter((story) => story.id == id)[0];

  return (
    <div className="p-8 gap-6 rounded-lg w-4/6 flex flex-col">
      <h1 className="text-4xl">{story.title}</h1>
      <div className="star-section">
        <span className="star-letter">S</span>
        <p className="star-description">{story.situation}</p>
      </div>
      <div className="star-section">
        <span className="star-letter">T</span>
        <p className="star-description">{story.task}</p>
      </div>
      <div className="star-section">
        <span className="star-letter">A</span>
        <p className="star-description">{story.action}</p>
      </div>
      <div className="star-section">
        <span className="star-letter">R</span>
        <p className="star-description">{story.result}</p>
      </div>
    </div>
  );
};

export default Details;
