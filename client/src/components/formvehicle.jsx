import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { checkFormVehicle } from "./utils/regexValidation";
import Form from "./form";
import { updateVehicle, createVehicle } from "../Api";

function FormVehicle({ Dataform, closeHandle, isEditForm }) {
  const [data, setData] = useState({
    model: Dataform ? Dataform.model : "",
    licensePlate: Dataform ? Dataform.licensePlate : "",
    color: Dataform ? Dataform.color : "white",
    year: Dataform ? Dataform.year : "2019",
    manufacturers: Dataform ? Dataform.manufacturers : "BMW",
  });
  const licensePlate = Dataform ? Dataform.licensePlate : "";
  const [year, setYear] = useState(Dataform ? Dataform.year : "2019");
  const [error, setError] = useState({
    eModel: "",
    eLicensePlate: "",
  });
  const onSubmit = async () => {
    if (await checkFormVehicle(data, setError)) {
      if (isEditForm) {
        updateVehicle(data, licensePlate);
      } else {
        createVehicle(data);
      }
      closeHandle();
    }
  };
  return (
    <Form>
      <h2 id="alert-dialog-title">
        {isEditForm ? "Edit Vehicle" : "Create new Vehicle"}
      </h2>
      <Grid>
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
      </Grid>
      <Grid>
        <Select
          label="Color"
          value={data.color}
          onChange={(e) => setData(() => ({ ...data, color: e.target.value }))}
        >
          <MenuItem value="white">white</MenuItem>
          <MenuItem value="black">black</MenuItem>
          <MenuItem value="silver">silver</MenuItem>
        </Select>
      </Grid>
      <Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label="Year"
            value={year}
            minDate="2010"
            maxDate="2021"
            onChange={(newValue) => {
              setData({ ...data, year: new Date(newValue.$y) });
              setYear(newValue);
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid>
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
      </Grid>
      <Grid>
        <TextField
          autoComplete="on"
          type="text"
          placeholder="Model"
          value={data.model}
          onChange={(event) => setData({ ...data, model: event.target.value })}
        />
        {error.eModel ? <p>{error.eModel}</p> : ""}
      </Grid>
      <Grid>
        <Button color="error" variant="contained" onClick={closeHandle}>
          Disagree
        </Button>
        <Button
          onClick={() => {
            onSubmit();
          }}
          color="success"
          variant="contained"
        >
          {isEditForm ? "Edit Vehicle" : "Create new Vehicle"}
        </Button>
      </Grid>
    </Form>
  );
}
export default FormVehicle;
