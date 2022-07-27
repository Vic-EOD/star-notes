import StoryList from "./StoryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import stories from "./stories";
import Details from "./Details";
import "./App.css";
import StarForm from "./StarForm";

function App() {
  return (
    <div className="App p-8 rounded-xl container flex flex-col justify-center align-center items-center bg-gray-400 relative">
      <BrowserRouter>
        <header>
          <h1 className="text-5xl text-center mb-12">
            <Link to="/">My Stories</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/" element={<StoryList stories={stories} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/new" element={<StarForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
