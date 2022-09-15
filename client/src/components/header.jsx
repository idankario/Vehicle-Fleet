import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";
import Logo from "./images/logo.png";

const HeaderTemplate = styled("header")({
  padding: "10px",
  "& a": {
    display: "inline-block",
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "3.5em 1.8em",
  },
  "& span": {
    color: "#FF0000",
    fontSize: "1.5em",
    paddingLeft: "2.5em",
    height: "1.5em",
  },
  backgroundColor: "#161c2d ",
});

const H5 = styled("h5")({
  float: "right",
  marginRight: "10px",
  fontSize: "1.2em",
  color: "#FFF",
  "& button": {
    color: "#FFF",
    paddingTop: "4px",
  },
});

export default function Header() {
  const [officeName, setOfficeName] = useState("");
  useEffect(() => {
    setOfficeName("User");
  }, []);

  return (
    <HeaderTemplate>
      <a href="# ">
        <span />
      </a>
      {officeName ? (
        <H5>
          <IconButton aria-label="exitAppIcon">
            <ExitToAppIcon />
          </IconButton>
          {officeName}
        </H5>
      ) : (
        ""
      )}
    </HeaderTemplate>
  );
}
