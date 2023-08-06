import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { scoreContext, homeContext } from "../context";
import { useContext } from "react";
function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty) {
  const price = priceRow(qty);
  return { desc, qty };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable({
  loanAmount,
  setLoanAmount,
  timeFrame,
  setTimeFrame,
  interestRate,
  setInterestRate,
}) {
  const { registered, setregistered } = useContext(scoreContext);
  const x = loanAmount > 10000 ? 7 : 10;
  setInterestRate(x);
  const rows = [
    createRow("Principle", `\$${loanAmount}`),
    createRow("Time", `${timeFrame} months`),
    createRow("Credit Score", 700),
    createRow("Lifestyle Score", `${registered ? 0 : 5}`),
    createRow("Interest rate", `${interestRate}%`),
  ];
  const decimalInterest =
    (registered ? interestRate : interestRate - 0.5) / 100;
  const monthlyRate = Math.pow(
    1 + (registered ? interestRate : interestRate - 0.5),
    timeFrame
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="spanning table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.unit}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>Final Interest</TableCell>
            <TableCell align="left" colSpan={1}>
              {`${registered ? interestRate : interestRate - 0.5}%`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Total Amount</TableCell>
            <TableCell align="left" colSpan={1}>
              {`\$${Math.round(
                loanAmount * Math.pow(1 + decimalInterest, timeFrame / 12)
              )}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Monthly </TableCell>
            <TableCell align="left" colSpan={1}>
              {`\$${Math.round(loanAmount / 12)}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
