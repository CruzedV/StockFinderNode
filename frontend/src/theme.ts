import { createTheme } from "@mui/system";
import InterExtraBold from "../public/fonts/InterExtraBold.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main:'#373737'
    },
    secondary: {
      main: '#F4F4F4'
    },
    danger: {
      main: '#DB324D'
    },
    success: {
      main: '#53DD6C'
    }
  },
  typography: {
    fontFamily: InterExtraBold,
  },
  components: {
  }
  });
  