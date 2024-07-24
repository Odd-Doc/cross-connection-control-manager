import "semantic-ui-css/semantic.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AddDevice from "./pages/AddDevice.js";
import AddFacility from "./pages/AddFacility.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addDevice" element={<AddDevice />} />
          <Route path="/addFacility" element={<AddFacility />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
