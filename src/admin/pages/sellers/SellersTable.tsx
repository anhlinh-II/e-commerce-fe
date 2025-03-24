import { FormControl, InputLabel, Select, MenuItem, Paper, Table, TableBody, TableContainer, TableHead, TableRow, styled, TableCell, tableCellClasses, Button } from "@mui/material";
import { useState } from "react";

const accountStatuses = [
     {
          status: "PENDING_VERIFICATION",
          title: "Pending Verification",
          description: "The account has been created but is awaiting verification, such as email confirmation or admin approval."
     },
     {
          status: "ACTIVE",
          title: "Active",
          description: "The account is fully functional, and the user has access to all permitted features."
     },
     {
          status: "SUSPENDED",
          title: "Suspended",
          description: "The account has been temporarily restricted due to policy violations or other issues. The user may need to take action to restore access."
     },
     {
          status: "DEACTIVATED",
          title: "Deactivated",
          description: "The user has voluntarily deactivated their account. They may be able to reactivate it later."
     },
     {
          status: "BANNED",
          title: "Banned",
          description: "The account has been permanently restricted due to serious violations of terms and conditions."
     },
     {
          status: "CLOSED",
          title: "Closed",
          description: "The account has been permanently closed, either by the user or by the system, and cannot be restored."
     }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
     [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
     },
     [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
     },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
     '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
     },
     // hide last border
     '&:last-child td, &:last-child th': {
          border: 0,
     },
}));

function createData(
     name: string,
     calories: number,
     fat: number,
     carbs: number,
     protein: number,
) {
     return { name, calories, fat, carbs, protein };
}

const rows = [
     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
     createData('Eclair', 262, 16.0, 24, 6.0),
     createData('Cupcake', 305, 3.7, 67, 4.3),
     createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const SellersTable = () => {
     const [accountStatus, setAccountStatus] = useState("ACTIVE");

     const handleChange = (event: any) => {
          setAccountStatus(event.target.value);
     }
     return (
          <>
               <div className="pb-5 w-60">
                    <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
                         <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={accountStatus}
                              label="Account Status"
                              onChange={handleChange}
                         >
                              {accountStatuses.map((item) => (
                                   <MenuItem value={item.status}>{item.title}</MenuItem>
                              ))}
                         </Select>
                    </FormControl>
               </div>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                         <TableHead>
                              <TableRow>
                                   <StyledTableCell>Seller Name</StyledTableCell>
                                   <StyledTableCell>Email</StyledTableCell>
                                   <StyledTableCell align="right">Mobile</StyledTableCell>
                                   <StyledTableCell align="right">MST</StyledTableCell>
                                   <StyledTableCell align="right">Business Name</StyledTableCell>
                                   <StyledTableCell align="right">Account Status</StyledTableCell>
                                   <StyledTableCell align="right">Change Status</StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {rows.map((row) => (
                                   <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                             {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        <StyledTableCell align="right">
                                             <Button>Change</Button>
                                        </StyledTableCell>
                                   </StyledTableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </>
     )
};

export default SellersTable;
