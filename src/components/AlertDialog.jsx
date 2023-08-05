import { Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
let count = 0;
export const AlertDialog = ({ open, setisopen }) => {
  const [title, settitle] = useState("Register for Lifestyle Track Program?");
  const [msg, setmsg] = useState(
    "You do not have a lifestyle scrore yet. Enroll in lifestyle score program today to check your score. Connect using Google Fit."
  );
  const handleClickOpen = () => {
    setisopen(true);
  };
  const handleCloseDisagree = () => {
    setisopen(false);
  };
  const handleCloseAgree = () => {
    console.log(count);
    if (count == 0) {
      count += 1;
      settitle("Connecting using Google Fit API...");
      setmsg(
        "This site needs access to your physical activity data, do you want to share you data?"
      );
    } else setisopen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
