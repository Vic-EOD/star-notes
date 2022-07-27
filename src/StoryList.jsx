import Story from "./Story";
import { Link } from "react-router-dom";

const StoryList = ({ stories }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <Link to="/new">
        <div className="absolute bottom-5 right-10 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      {!stories.length ? (
        <h1>No Stories Found</h1>
      ) : (
        stories.map((story) => {
          return (
            <Story
              title={story.title}
              shortDescription={`${story.situation.substring(0, 30)}...`}
              key={story.id}
              id={story.id}
            />
          );
        })
      )}
    </div>
  );
};

export default StoryList;
