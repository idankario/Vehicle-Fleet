/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import FormVehicle from "./formvehicle";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
// eslint-disable-next-line no-unused-vars
function DialogFormVehicle({ formData, handleClose, open, isEdit }) {
  return (
    <Dialog
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      open={open}
    >
      <DialogTitle id="alert-dialog-title">
        {isEdit ? "Edit Vehicle" : "Create new Vehicle"}
      </DialogTitle>
      <DialogActions>
        <FormVehicle Dataform={formData} />

        <Button onClick={handleClose}>Disagree</Button>
        <Button
          onClick={() => {
            handleClose();
          }}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default DialogFormVehicle;
