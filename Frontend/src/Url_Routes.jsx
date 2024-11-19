import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Chatbot from "./screens/Chatbot";

function Url_Routes() {
   
  

  return (
    <BrowserRouter>
      <Routes>

          <Route excat path="/" element={<Chatbot />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default Url_Routes;
