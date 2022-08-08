import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Form from "./pages/form";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </div>
    </Router>
  );
}