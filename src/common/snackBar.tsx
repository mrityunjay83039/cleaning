import { Alert, CardMedia, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  getSnackContent,
  setSnackPack,
} from "../redux/reducer/commonResMessage";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

export interface SnackbarMessage {
  message: string;
  key: number;
}

const AppSnackBar = () => {
  const dispatch = useDispatch();
  const snackPack = useAppSelector(getSnackContent);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      const remaining = snackPack.slice(1);
      dispatch(setSnackPack(remaining));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CardMedia component={"img"} style={{ width: 15 }} image={"/green-circle-tick.svg"} alt="My Image" />
      </IconButton>
    </React.Fragment>
  );
  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        action={action}
      >
        <Alert
          className="snacbar-msg"
          onClose={handleClose}
          severity="success"
          variant="standard"
          sx={{ width: "100%" }}
        >
          {messageInfo ? messageInfo.message : undefined}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AppSnackBar;
