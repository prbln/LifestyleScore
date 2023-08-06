import { Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useEffect, useState } from "react";
import { scoreContext, homeContext } from "../context";

let count = 0;

export const AlertDialog = ({ open, setisopen }) => {
  const { registered, setregistered } = useContext(scoreContext);
  const { home, sethome } = useContext(homeContext);

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
    if (count == 0) {
      count += 1;
      settitle("Connecting using Google Fit API...");
      setmsg(
        "This site needs access to your physical activity data, do you want to share you data?"
      );
    } else {
      setisopen(false);
      setregistered(false);
      sethome(false);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {registered
            ? title
            : "You can get a lower interest rate at same credit score!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {registered
              ? msg
              : " Lifestyle score is a metric of how active and healthy your life style is. It ranges from 0-12, for each month when your your average steps are more than 10,000 your score increases by 1. You can get your interest rate lowered by 10% of your lifestyle score. Check Your Lifestyle Score!!!"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>
            {registered ? "Disagree" : ""}
          </Button>
          <Button onClick={handleCloseAgree} autoFocus>
            {registered ? "Agree" : "Check Score"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
