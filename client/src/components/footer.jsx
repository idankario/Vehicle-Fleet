import { styled } from "@mui/material/styles";

const Footer = styled("div")(() => ({
  background: "#161c2d",
  height: "100px",
  "& p": {
    color: "#fff",
    textAlign: "center",
    paddingTop: "20px",
  },
}));
export default Footer;
