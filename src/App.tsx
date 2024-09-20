import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
