import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

export const theme = createTheme({
  status: {
    danger: '#DB324D',
  },
  palette: {
    primary: {
      main:'#373737',
    },
    secondary: {
      main: '#F4F4F4',
    },
    success: {
      main: '#53DD6C',
    },
    text: {
      primary: '#F4F4F4',
      secondary: '#373737',
    },
    
  },
  typography: {
    fontFamily: "Inter"
  },
  components: {
  }
  });
  