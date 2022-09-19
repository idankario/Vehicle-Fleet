import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteVehicle } from "../Api";
import DialogFormVehicle from "./dialogformvehicle";

export default function TableVehicle({ rows }) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteDialog(true);
  };

  const handleDeleteClose = () => {
    setDeleteDialog(false);
  };
  const handleEditOpen = () => {
    setEditDialog(true);
  };

  const handleEditClose = () => {
    setEditDialog(false);
  };
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
                  <div>
                    <IconButton
                      onClick={() => handleEditOpen()}
                      color="primary"
                      aria-label="editIcon"
                      title="Edit"
                    >
                      <EditIcon />
                    </IconButton>
                    {editDialog && (
                      <DialogFormVehicle
                        formData={row}
                        handleClose={handleEditClose}
                        open={editDialog}
                        isEdit={1}
                      />
                    )}
                  </div>
                  <div>
                    <IconButton
                      onClick={() => handleDeleteOpen()}
                      aria-label="editIcon"
                      title="Delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Dialog open={deleteDialog} onClose={handleDeleteClose}>
                      <DialogTitle id="alert-dialog-title">
                        Are you suer you want to delete vehicle?
                      </DialogTitle>
                      <DialogActions>
                        <Button onClick={handleDeleteClose}>Disagree</Button>
                        <Button
                          onClick={() => {
                            deleteVehicle(row.licensePlate);
                            handleDeleteClose();
                          }}
                          autoFocus
                        >
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))
          : ""}
      </TableBody>
    </Table>
  );
}
