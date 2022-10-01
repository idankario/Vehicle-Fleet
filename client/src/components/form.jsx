import { styled } from "@mui/material/styles";

const Form = styled("form")({
  textAlign: "center",
  "& img": {
    width: "12em",
    height: "7em",
    verticalAlign: "middle",
  },
  "& section": {
    margin: "auto",
    width: "20em",
  },
  "& p": {
    color: "red",
    fontSize: "15px",
  },
  "& section >*:not(svg,p)": {
    marginBottom: "20px",
    minHeight: "52px",
    opacity: "0.9",
  },
  "& .MuiOutlinedInput-root": {
    background: "#E8F0FE",
  },
  "& .MuiOutlinedInput-root,.MuiButton-root": {
    borderRadius: "30px ",
  },

  width: "400px",

  fontSize: "15px",
  a: {
    fontSize: "20px",
  },
  ">*": {
    margin: "20px",
  },
  h2: {
    fontSize: "30px",
  },

  button: {
    marginRight: "20px",
  },
  ".MuiInputBase-root": {
    width: "200px",
    height: "50px",
  },
});
export default Form;
