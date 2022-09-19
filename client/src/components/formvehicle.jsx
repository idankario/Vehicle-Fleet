import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { checkFormVehicle } from "./utils/regexValidation";

function FormVehicle({ Dataform }) {
  const [data, setData] = useState({
    model: Dataform ? Dataform.model : "",
    color: Dataform ? Dataform.color : "white",
    year: Dataform ? Dataform.year : "2019",
    manufacturers: Dataform ? Dataform.manufacturers : "BMW",
    licensePlate: Dataform ? Dataform.licensePlate : "",
  });
  const [error, setError] = useState({
    eModel: "",
    eLicensePlate: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    checkFormVehicle(data, setError);
  };
  return (
    <form onSubmit={onSubmit}>
      <section>
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
          onChange={(e) => setData(() => ({ ...data, color: e.target.value }))}
        >
          <MenuItem value="white">white</MenuItem>
          <MenuItem value="black">black</MenuItem>
          <MenuItem value="silver">silver</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label="Year"
            value={data.year}
            minDate="2010"
            maxDate="2021"
            onChange={(newValue) => {
              setData({ ...data, year: newValue });
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
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
          onChange={(event) => setData({ ...data, model: event.target.value })}
        />
        {error.eModel ? <p>{error.eModel}</p> : ""}
      </section>
    </form>
  );
}
export default FormVehicle;
