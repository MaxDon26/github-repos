import { Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Projects from "./layouts/projects";
import "./app.sass";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPrevProjects } from "./store/projects";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPrevProjects());
  }, []);

  return (
    <>
      <header className="fixed-top">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
