import { styled } from "@mui/material/styles";

const Container = styled("div")(() => ({
  maxWidth: "100vw",
  minHeight: "100vh",
  "& h1, & h2, & h3 ": {
    color: "#0000FF",
    textAlign: "center",
  },
}));

export default Container;
