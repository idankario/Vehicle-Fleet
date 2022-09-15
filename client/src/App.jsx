import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./routes/404page";

import HomePage from "./routes/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
