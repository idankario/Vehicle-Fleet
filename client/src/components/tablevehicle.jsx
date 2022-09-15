import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function TableVehicle({ rows }) {
  return (
    <Table sx={{ width: "1000px", margin: "auto" }} aria-label="simple table">
      <TableHead>
        <TableRow
          sx={{
            background: "linear-gradient(45deg, #CDFA00 30%, #ECB22F 90%)",
            opacity: 1,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          }}
        >
          <TableCell sx={{ color: `black`, fontSize: "30px" }}>
            License Plate
          </TableCell>
          <TableCell sx={{ color: `black`, fontSize: "30px" }}>Model</TableCell>
          <TableCell sx={{ color: `black`, fontSize: "30px" }}>
            Manufacturers
          </TableCell>
          <TableCell sx={{ color: `black`, fontSize: "30px" }}>Year</TableCell>
          <TableCell sx={{ color: `black`, fontSize: "30px" }}>Color</TableCell>
          <TableCell sx={{ color: `s`, fontSize: "30px" }}>Buttons</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows
          ? rows.map((row) =>
              row.image_name.split(".").length > 1 ? (
                <TableRow
                  key={`${row.image_name}`}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      background:
                        row.is_active === 2
                          ? `linear-gradient(45deg, #CDFA00 40%, #ECB22F 90%)`
                          : `linear-gradient(45deg, #606060 40%, #606060 90%)`,
                    },
                  }}
                >
                  <TableCell sx={{ fontSize: "18px" }}>{row.lp}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.mode}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    {row.manufacturers}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.year}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.color}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    <IconButton aria-label="editIcon">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="editIcon">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )
            )
          : ""}
      </TableBody>
    </Table>
  );
}
