import React, { useState } from "react";
import DatePicker from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { checkFormVehicle } from "../components/utils/regexValidation";
import Header from "../components/header";
import { H1 } from "../components/h1";
import Container from "../components/container";

function FormVehicle() {
  const [data, setData] = useState({
    model: "",
    color: "white",
    year: 2010,
    manufacturers: "BMW",
    licensePlate: "",
  });
  const [error, setError] = useState({
    eLicensePlate: "",
    eEmail: "",
    ePhone: "",
    ePassword: "",
  });

  const isFull = data.manufacturers && data.licensePlate;
  const onSubmit = async (event) => {
    event.preventDefault();
    checkFormVehicle(data, setError, setData);
  };

  return (
    <Container>
      <Header />
      <form onSubmit={onSubmit}>
        <section>
          <H1>Create New Vehicle</H1>
          <Select
            label="Manufacturers"
            value={data.manufacturers}
            onChange={(e) =>
              setData(() => ({
                ...data,
                manufacturers: e.target.value,
              }))
            }
          >
            <MenuItem value="Dodge">Dodge</MenuItem>
            <MenuItem value="Audi">Audi</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Volkswagen">Volkswagen</MenuItem>
          </Select>
          <Select
            label="Color"
            value={data.color}
            onChange={(e) =>
              setData(() => ({ ...data, color: e.target.value }))
            }
          >
            <MenuItem value="white">white</MenuItem>
            <MenuItem value="black">black</MenuItem>
            <MenuItem value="silver">silver</MenuItem>
          </Select>
          <DatePicker
            views={["year"]}
            label="Year"
            value={data.year}
            minDate="2010"
            maxDate="2021"
            onChange={(newValue) => {
              setData({ ...data, year: newValue });
            }}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} helperText={null} />
            )}
          />

          <TextField
            autoComplete="on"
            type="text"
            placeholder="License Plate"
            value={data.licensePlate}
            onChange={(event) =>
              setData({ ...data, licensePlate: event.target.value })
            }
          />
          {error.eLicensePlate ? <p>{error.eLicensePlate}</p> : ""}
          <TextField
            autoComplete="on"
            type="text"
            placeholder="Model"
            value={data.model}
            onChange={(event) =>
              setData({ ...data, model: event.target.value })
            }
          />
          {error.eLicensePlate ? <p>{error.eLicensePlate}</p> : ""}
          <Button disabled={!isFull} type="submit">
            Create New Vehicle
          </Button>
        </section>
      </form>
    </Container>
  );
}
export default FormVehicle;
