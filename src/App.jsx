import StoryList from "./StoryList";
import stories from "./stories";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Stories</h1>
      </header>
      <StoryList stories={stories} />
    </div>
  );
}

export default App;
