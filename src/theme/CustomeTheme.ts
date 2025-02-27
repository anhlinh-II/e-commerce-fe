import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

const customeTheme = createTheme(
    {
     palette: {
          mode: "light",
          primary: {
               main: "#0284c7"
          },
          secondary: {
               main: "#EAF0F1"
          }
     }
    }
)

export default customeTheme;