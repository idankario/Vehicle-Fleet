import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteVehicle } from "../Api";

export default function TableVehicle({ rows }) {
  return (
    <Table
      sx={{ width: "1000px", fontWeight: "bold", margin: "auto" }}
      aria-label="Vehicle table"
    >
      <TableHead>
        <TableRow
          sx={{
            background: "linear-gradient(45deg, #CDFA00 30%, #ECB22F 90%)",
            opacity: 1,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          }}
        >
          <TableCell>License Plate</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Manufacturers</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>Buttons</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows
          ? rows.map((row) => (
              <TableRow
                key={`${row.licensePlate}`}
                sx={{
                  "&:hover": {
                    background:
                      row.is_active === 2
                        ? `linear-gradient(45deg, #606060 40%, #606060 90%)`
                        : `linear-gradient(45deg, #CDFA00 40%, #ECB22F 90%)`,
                  },
                }}
              >
                <TableCell>{row.licensePlate}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.manufacturers}</TableCell>
                <TableCell>{row.year.split("-")[0]}</TableCell>
                <TableCell>{row.color}</TableCell>
                <TableCell>
                  <IconButton aria-label="editIcon" title="Edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteVehicle(row.licensePlate)}
                    aria-label="editIcon"
                    title="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          : ""}
      </TableBody>
    </Table>
  );
}
