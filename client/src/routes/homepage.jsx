import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { getListVehicle } from "../Api";
import Header from "../components/header";
import TableVehicle from "../components/tablevehicle";
import { H1 } from "../components/h1";
import Container from "../components/container";
import DialogFormVehicle from "../components/dialogformvehicle";

function HomePage() {
  const [rows, setRows] = useState(null);
  const [openCreate, setOpen] = useState(false);
  useEffect(() => {
    async function getDataDB() {
      const data = await getListVehicle();
      setRows(data);
    }
    getDataDB();
  }, []);

  const handleCloseCreate = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Header />
      <div style={{ textAlign: "center" }}>
        <H1>Vehicle LIST</H1>
        {openCreate && (
          <DialogFormVehicle
            open={openCreate}
            handleClose={handleCloseCreate}
          />
        )}
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
          startIcon={<ControlPointIcon />}
        >
          Add New Vehicle
        </Button>
        {rows ? (
          <TableVehicle rows={rows} />
        ) : (
          <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
        )}
      </div>
    </Container>
  );
}

export default HomePage;
