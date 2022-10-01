import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer";

const useStyles = {
  "*": {
    margin: "0",
    padding: "0",
  },
  "& h1,&h2,&h3": {
    fontFamily: "Times New Roman, sans-serif",
  },
  body: {
    fontFamily: "Times New Roman",
  },
  a: {
    textDecoration: "none",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));
root.render(
  <>
    <GlobalStyles
      styles={{
        ...useStyles,
      }}
    />
    <App />
  </>
);
footer.render(
  <Footer>
    <p>© Online Vehicle Fleet</p>
    <p>
      Done by{" "}
      <a href="https://github.com/idankario" target="_blank" rel="noreferrer">
        Idan Kario
      </a>
    </p>
  </Footer>
);
reportWebVitals();
