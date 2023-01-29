import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
  interface TypographyVariants {
    positionSubtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    positionSubtitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    positionSubtitle: true;
    h3: false;
  }
}

let themeMain = createTheme({
// COLOR DEFINITION
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
    error: {
      main: '#DB324D',
    },
    text: {
      primary: '#F4F4F4',
      secondary: '#373737',
    },
// FONT DEFINITION
  },  
  typography: {
    fontFamily: "Inter",
    fontSize: 16,
    positionSubtitle: {
      fontFamily: "Inter",
      fontSize: 12,
    }
  },
  });

export const theme = responsiveFontSizes(themeMain);
  