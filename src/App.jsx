import StoryList from "./StoryList";
import stories from "./stories";
import "./App.css";

function App() {
  return (
    <div className="App p-8 rounded-xl container flex flex-col justify-center align-center bg-gray-300 w-100 h-100">
      <header>
        <h1 className="text-5xl text-center mb-12">My Stories</h1>
      </header>
      <StoryList stories={stories} />
    </div>
  );
}

export default App;
