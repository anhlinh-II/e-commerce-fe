import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import { AddShoppingCart } from '@mui/icons-material';
import NavBar from './customer/component/navbar/NavBar';
import customeTheme from './theme/CustomeTheme';
import Home from './customer/page/home/Home';

export default function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  )
}
