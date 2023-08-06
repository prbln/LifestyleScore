import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import SpanningTable from "./SpanningTable";
import { scoreContext } from "../context";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, setOpen, alert, setalert }) {
  const { registered, setregistered } = useContext(scoreContext);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseApply = () => {
    setalert(true);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [loanAmount, setLoanAmount] = useState();
  const [timeFrame, setTimeFrame] = useState();
  const [interestRate, setInterestRate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const calculatedInterestRate = 5.0;
    setInterestRate(calculatedInterestRate);
  };
  const handleloanAmountInput = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setLoanAmount(input);
    } else {
      window.alert("Please enter only digits.");
    }
  };
  const handleTimeFrameInput = (e) => {
    const input = e.target.value;
    console.log(input);
    // Use a regular expression to check if the input contains only digits
    if (/^\d*$/.test(input)) {
      setTimeFrame(input);
    } else {
      window.alert("Please enter only digits.");
    }
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Personal Loan
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Loan Amount"
              value={loanAmount}
              onInput={handleloanAmountInput}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Time Frame (in months)"
              value={timeFrame}
              onInput={handleTimeFrameInput}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ ml: 25, mr: 8, mb: 2 }}
            >
              Calculate Interest
            </Button>

            {interestRate !== null && (
              <SpanningTable
                loanAmount={loanAmount}
                setLoanAmount={() => setLoanAmount}
                timeFrame={timeFrame}
                setTimeFrame={() => setTimeFrame}
                interestRate={interestRate}
                setInterestRate={(x) => setInterestRate(x)}
              />
            )}
            {interestRate !== null && (
              <Typography variant="h6" sx={{ ml: 25, mt: 2 }}>
                Interest Rate: {registered ? interestRate : interestRate - 0.5}%
              </Typography>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          {interestRate !== null && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              autoFocus
              onClick={handleCloseApply}
            >
              Apply
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
