import StoryList from "./StoryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import stories from "./stories";
import "./App.css";

function App() {
  return (
    <div className="App p-8 rounded-xl container flex flex-col justify-center align-center bg-gray-300">
      <BrowserRouter>
        <header>
          <h1 className="text-5xl text-center mb-12">
            <Link to="/">My Stories</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/" element={<StoryList stories={stories} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
