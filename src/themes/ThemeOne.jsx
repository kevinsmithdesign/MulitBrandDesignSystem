import { createTheme } from "@mui/material";

// BLUEHOST
// Design Tokens - Brand Primitives
const colorTokens = {
  // Blue Scale
  blue: {
    50: "#F0F3FF",
    100: "#DEE5FE",
    200: "#BCCBFD",
    300: "#98B1FC",
    400: "#749BFB",
    500: "#3F82FA",
    600: "#196BDE",
    700: "#104FA7",
    800: "#083474",
    900: "#031E48",
    950: "#011231",
  },
  // Green Scale
  green: {
    50: "#E3FDE2",
    100: "#CFFDC",
    200: "#7DFA75",
    300: "#64ED59",
    400: "#5BDA52",
    500: "#54CB4B",
    600: "#4CB944",
    700: "#368730",
    800: "#225C1D",
    900: "#0E310C",
    950: "#061C05",
  },
  // Yellow Scale
  yellow: {
    50: "#FFFAF1",
    100: "#FFF5E5",
    200: "#FFECC9",
    300: "#FFE2A8",
    400: "#FFD87F",
    500: "#FFD257",
    600: "#F9C810",
    700: "#B69209",
    800: "#765E04",
    900: "#3F3100",
    950: "#241A00",
  },
  // Red Scale
  red: {
    50: "#FEEDEC",
    100: "#FDADC",
    200: "#FBB4B8",
    300: "#F99095",
    400: "#F85F6A",
    500: "#EC233C",
    600: "#BF1A2F",
    700: "#921122",
    800: "#690915",
    900: "#3E0309",
    950: "#2B0204",
  },
  // Neutral Scale (for text and backgrounds)
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },
};

// Semantic Tokens - Map brand primitives to meaning
const semanticTokens = {
  text: {
    primary: colorTokens.neutral[900], // #111827
    secondary: colorTokens.neutral[600], // #4B5563
    disabled: colorTokens.neutral[400], // #9CA3AF
    inverse: colorTokens.neutral[50], // #F9FAFB
  },
  background: {
    primary: colorTokens.neutral[50], // #F9FAFB
    secondary: colorTokens.neutral[100], // #F3F4F6
    tertiary: colorTokens.neutral[200], // #E5E7EB
  },
  border: {
    primary: colorTokens.neutral[200], // #E5E7EB
    secondary: colorTokens.neutral[300], // #D1D5DB
    focus: colorTokens.blue[500], // #3F82FA
  },
  brand: {
    primary: colorTokens.blue[600], // #196BDE
    primaryHover: colorTokens.blue[700], // #104FA7
    primaryActive: colorTokens.blue[800], // #083474
    secondary: colorTokens.blue[500], // #3F82FA
  },
  status: {
    success: colorTokens.green[600], // #4CB944
    successBg: colorTokens.green[50], // #E3FDE2
    warning: colorTokens.yellow[600], // #F9C810
    warningBg: colorTokens.yellow[50], // #FFFAF1
    error: colorTokens.red[600], // #BF1A2F
    errorBg: colorTokens.red[50], // #FEEDEC
    info: colorTokens.blue[600], // #196BDE
    infoBg: colorTokens.blue[50], // #F0F3FF
  },
};

// Component Tokens - Specific usage in components
const componentTokens = {
  button: {
    primary: {
      background: semanticTokens.brand.primary,
      backgroundHover: semanticTokens.brand.primaryHover,
      backgroundActive: semanticTokens.brand.primaryActive,
      text: colorTokens.neutral[50],
      border: semanticTokens.brand.primary,
    },
    secondary: {
      background: "transparent",
      backgroundHover: colorTokens.blue[50],
      backgroundActive: colorTokens.blue[100],
      text: semanticTokens.brand.primary,
      border: semanticTokens.brand.primary,
    },
    success: {
      background: semanticTokens.status.success,
      backgroundHover: colorTokens.green[700],
      backgroundActive: colorTokens.green[800],
      text: colorTokens.neutral[50],
      border: semanticTokens.status.success,
    },
    warning: {
      background: semanticTokens.status.warning,
      backgroundHover: colorTokens.yellow[700],
      backgroundActive: colorTokens.yellow[800],
      text: colorTokens.neutral[900],
      border: semanticTokens.status.warning,
    },
    error: {
      background: semanticTokens.status.error,
      backgroundHover: colorTokens.red[700],
      backgroundActive: colorTokens.red[800],
      text: colorTokens.neutral[50],
      border: semanticTokens.status.error,
    },
  },
  alert: {
    success: {
      background: semanticTokens.status.successBg,
      border: semanticTokens.status.success,
      text: colorTokens.green[800],
      icon: semanticTokens.status.success,
    },
    warning: {
      background: semanticTokens.status.warningBg,
      border: semanticTokens.status.warning,
      text: colorTokens.yellow[800],
      icon: semanticTokens.status.warning,
    },
    error: {
      background: semanticTokens.status.errorBg,
      border: semanticTokens.status.error,
      text: colorTokens.red[800],
      icon: semanticTokens.status.error,
    },
    info: {
      background: semanticTokens.status.infoBg,
      border: semanticTokens.status.info,
      text: colorTokens.blue[800],
      icon: semanticTokens.status.info,
    },
  },
};

// MUI Theme Configuration
const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: semanticTokens.text.primary,
      secondary: semanticTokens.text.secondary,
      disabled: semanticTokens.text.disabled,
    },
    background: {
      default: semanticTokens.background.primary,
      paper: colorTokens.neutral[50],
    },
    primary: {
      main: semanticTokens.brand.primary,
      dark: semanticTokens.brand.primaryHover,
      light: colorTokens.blue[400],
      contrastText: colorTokens.neutral[50],
    },
    secondary: {
      main: semanticTokens.brand.secondary,
      dark: colorTokens.blue[600],
      light: colorTokens.blue[300],
      contrastText: colorTokens.neutral[50],
    },
    error: {
      main: semanticTokens.status.error,
      dark: colorTokens.red[700],
      light: colorTokens.red[400],
      contrastText: colorTokens.neutral[50],
    },
    warning: {
      main: semanticTokens.status.warning,
      dark: colorTokens.yellow[700],
      light: colorTokens.yellow[400],
      contrastText: colorTokens.neutral[900],
    },
    info: {
      main: semanticTokens.status.info,
      dark: colorTokens.blue[700],
      light: colorTokens.blue[400],
      contrastText: colorTokens.neutral[50],
    },
    success: {
      main: semanticTokens.status.success,
      dark: colorTokens.green[700],
      light: colorTokens.green[400],
      contrastText: colorTokens.neutral[50],
    },
    divider: semanticTokens.border.primary,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "46px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontSize: "24px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      color: semanticTokens.text.primary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      color: semanticTokens.text.secondary,
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "none",
          fontWeight: "600",
          textTransform: "none",
          transition: "all 0.2s ease-in-out",
        },
        containedPrimary: {
          backgroundColor: componentTokens.button.primary.background,
          color: componentTokens.button.primary.text,
          border: `1px solid ${componentTokens.button.primary.border}`,
          "&:hover": {
            backgroundColor: componentTokens.button.primary.backgroundHover,
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: componentTokens.button.primary.backgroundActive,
          },
        },
        outlinedPrimary: {
          backgroundColor: componentTokens.button.secondary.background,
          color: componentTokens.button.secondary.text,
          border: `1px solid ${componentTokens.button.secondary.border}`,
          "&:hover": {
            backgroundColor: componentTokens.button.secondary.backgroundHover,
            border: `1px solid ${componentTokens.button.secondary.border}`,
          },
        },
        containedSuccess: {
          backgroundColor: componentTokens.button.success.background,
          color: componentTokens.button.success.text,
          "&:hover": {
            backgroundColor: componentTokens.button.success.backgroundHover,
          },
        },
        containedWarning: {
          backgroundColor: componentTokens.button.warning.background,
          color: componentTokens.button.warning.text,
          "&:hover": {
            backgroundColor: componentTokens.button.warning.backgroundHover,
          },
        },
        containedError: {
          backgroundColor: componentTokens.button.error.background,
          color: componentTokens.button.error.text,
          "&:hover": {
            backgroundColor: componentTokens.button.error.backgroundHover,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "16px",
          border: "1px solid",
        },
        standardSuccess: {
          backgroundColor: componentTokens.alert.success.background,
          borderColor: componentTokens.alert.success.border,
          color: componentTokens.alert.success.text,
          "& .MuiAlert-icon": {
            color: componentTokens.alert.success.icon,
          },
        },
        standardWarning: {
          backgroundColor: componentTokens.alert.warning.background,
          borderColor: componentTokens.alert.warning.border,
          color: componentTokens.alert.warning.text,
          "& .MuiAlert-icon": {
            color: componentTokens.alert.warning.icon,
          },
        },
        standardError: {
          backgroundColor: componentTokens.alert.error.background,
          borderColor: componentTokens.alert.error.border,
          color: componentTokens.alert.error.text,
          "& .MuiAlert-icon": {
            color: componentTokens.alert.error.icon,
          },
        },
        standardInfo: {
          backgroundColor: componentTokens.alert.info.background,
          borderColor: componentTokens.alert.info.border,
          color: componentTokens.alert.info.text,
          "& .MuiAlert-icon": {
            color: componentTokens.alert.info.icon,
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          marginBottom: "4px",
        },
      },
    },
  },
});

// Export tokens for use in other components
export { colorTokens, semanticTokens, componentTokens };
export default theme;
