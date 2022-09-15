import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./routes/page404";
import ContainerMiddle from "./components/container";

function App() {
  return (
    <Router>
      <Routes>
        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ContainerMiddle>
        <p>© Online Vehicle Fleet</p>
        <p>
          Done by{" "}
          <a
            href="https://github.com/idankario"
            target="_blank"
            rel="noreferrer"
          >
            Idan Kario
          </a>
        </p>
      </ContainerMiddle>
    </Router>
  );
}

export default App;
