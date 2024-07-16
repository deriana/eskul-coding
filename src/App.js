import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Register from "./components/register";
import Quiz from "./components/quiz";
import VideoPlayer from "./components/video";
import Porto from "./components/portofolio";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Porto />
      <VideoPlayer />
      <Register />
      <Quiz />
    </div>
  );
}

export default App;
