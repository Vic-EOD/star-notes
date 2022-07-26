import Story from "./Story";

const StoryList = ({ stories }) => {
  return (
    <div>
      {!stories.length ? (
        <h1>No Stories Found</h1>
      ) : (
        stories.map((story, index) => {
          return (
            <Story
              title={story.title}
              shortDescription={story.situation.substring(0, 30)}
              key={index}
            />
          );
        })
      )}
    </div>
  );
};

export default StoryList;
