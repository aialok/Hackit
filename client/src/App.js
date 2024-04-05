import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import CountdownPage from "./pages/CountdownPage";
import bgVideo from "./assets/qv2.mp4";
function App() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const { pathname } = useLocation();
  return (
    <div className="App">
      {loading ? (
        <>
          <Loader />
          <div
            onLoadedData={handleLoad}
            className={`-z-1 hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen`}
          >
            <video
              autoPlay
              className="min-w-full min-h-full object-cover"
              muted
              preload="auto"
              loop
            >
              <source src={bgVideo} type="video/mp4" />
              No Video
            </video>
          </div>
        </>
      ) : (
        <>
          {!pathname.includes("countdown") && <Navbar />}
          <div
            onLoadedData={handleLoad}
            className={`-z-1 ${
              loading ? "hidden" : ""
            } fixed top-0 left-0 right-0 bottom-0 w-screen h-screen`}
          >
            <video
              autoPlay
              className="min-w-full min-h-full object-cover"
              muted
              preload="auto"
              loop
            >
              <source src={bgVideo} type="video/mp4" />
              No Video
            </video>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/countdown" element={<CountdownPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
