/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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
function DialogFormVehicle({ formData, handleClose, open, isEdit }) {
  return (
    <Dialog
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      open={open}
    >
      <DialogActions>
        <FormVehicle
          Dataform={formData}
          closeHandle={handleClose}
          isEditForm={isEdit}
        />
      </DialogActions>
    </Dialog>
  );
}
export default DialogFormVehicle;
