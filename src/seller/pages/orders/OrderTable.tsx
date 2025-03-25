import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { fetchSellerOrders, updateOrderStatus } from '../../../state/seller/sellerOrderSlice';
import { Button, Menu, MenuItem } from '@mui/material';

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

const orderStatusColor = {
     PENDING: { color: "FFA500", label: "PENDING" },
     CONFIRMED: { color: "008000", label: "CONFIRMED" },
     PLACED: { color: "0000FF", label: "PLACED" },
     SHIPPED: { color: "4B0082", label: "SHIPPED" },
     DELIVERED: { color: "32CD32", label: "DELIVERED" },
     CANCELED: { color: "FF0000", label: "CANCELED" },
};

const orderStatus = [
     { color: "FFA500", label: "PENDING" },
     { color: "008000", label: "CONFIRMED" },
     { color: "0000FF", label: "PLACED" },
     { color: "4B0082", label: "SHIPPED" },
     { color: "32CD32", label: "DELIVERED" },
     { color: "FF0000", label: "CANCELED" },
]

export default function OrderTable() {
     const { sellerOrder } = useAppSelector(store => store);
     const dispatch = useAppDispatch()
     const [anchorEl, setAnchorEl] = React.useState<any>(null);
     const open = Boolean(anchorEl);
     const handleClick = (event: any, orderId: number) => {
          setAnchorEl((prev: any) => ({ ...prev, [orderId]: event.currentTarget }));
     };
     const handleClose = (orderId: number) => () => {
          setAnchorEl((prev: any) => ({ ...prev, [orderId]: null }));
     };


     React.useEffect(() => {
          dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""))
     }, [])

     const handleUpdateOrderStatus = (orderId: number, orderStatus: any) => () => {
          dispatch(updateOrderStatus({ jwt: localStorage.getItem("jwt") || "", orderId, orderStatus }));
     }

     return (
          <TableContainer component={Paper}>
               <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                         <TableRow>
                              <StyledTableCell>Order ID</StyledTableCell>
                              <StyledTableCell align='right'>Products</StyledTableCell>
                              <StyledTableCell align="right">Shipping Address</StyledTableCell>
                              <StyledTableCell align="right">Order Status</StyledTableCell>
                              <StyledTableCell align="right">Update</StyledTableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {sellerOrder.orders.map((item) => (
                              <StyledTableRow key={item.id}>
                                   <StyledTableCell component="th" scope="row">
                                        {item.id}
                                   </StyledTableCell>
                                   <StyledTableCell >{
                                        <div className='flex gap-1 flex-wrap'>
                                             {item.orderItems.map(orderItem => <div className='flex gap-5'>
                                                  <img className='w-20 rounded-md' src={orderItem.product.images[0]} alt="" />
                                                  <div className='flex flex-col justify-between py-2'>
                                                       <h1>Title: {orderItem.product.title}</h1>
                                                       <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                                                       <h1>Color: {orderItem.product.color}</h1>
                                                  </div>
                                             </div>)}
                                        </div>
                                   }</StyledTableCell>
                                   <StyledTableCell align="right">{
                                        <div className='flex flex-col gap-y-2'>
                                             <h1>{item.shhippingAdress.name}</h1>
                                             <h1>{item.shhippingAdress.address}, {item.shhippingAdress.city}</h1>
                                             <h1>{item.shhippingAdress.region} - {item.shhippingAdress.pinCode}</h1>
                                             <h1><strong>Mobile: </strong>{item.shhippingAdress.mobile}</h1>
                                        </div>
                                   }</StyledTableCell>
                                   <StyledTableCell align="right">{
                                        <span className='px-5 py-2 border rounded-full text-primary-color border-primary-color'>{item.orderStatus}</span>
                                   }</StyledTableCell>
                                   <StyledTableCell align="right">
                                        <Button onClick={(e) => handleClick(e, item.id)}>
                                             Status
                                        </Button>
                                        <Menu
                                             id={`status-menu-${item.id}`}
                                             anchorEl={anchorEl[item.id]}
                                             open={Boolean(anchorEl[item.id])}
                                             onClose={handleClose(item.id)}
                                             MenuListProps={{
                                                  'aria-labelledby': `status-menu-${item.id}`,
                                             }}
                                        >
                                             {orderStatus.map((status) =>
                                                  <MenuItem key={status.label} onClick={handleUpdateOrderStatus(item.id, status.label)}>
                                                       {status.label}
                                                  </MenuItem>
                                             )}
                                        </Menu>
                                   </StyledTableCell>
                              </StyledTableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
}