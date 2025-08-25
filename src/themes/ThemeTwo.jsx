import { createTheme } from "@mui/material";

// Design Tokens - Brand Primitives
const colorTokens = {
  // Blue Scale (Primary brand color)
  blue: {
    50: "#EEF4FD",
    100: "#DEE9FB",
    200: "#BAD3F8",
    300: "#94BFF4",
    400: "#65AAF1",
    500: "#4495DE",
    600: "#4495DE",
    700: "#295F8F",
    800: "#194062",
    900: "#0A2339",
    950: "#041424",
  },
  // Green Scale
  green: {
    50: "#EEFEE4",
    100: "#DCFEC4",
    200: "#B1FD67",
    300: "#A2F346",
    400: "#9AE642",
    500: "#91DA3E",
    600: "#89CE3A",
    700: "#639728",
    800: "#406317",
    900: "#1F3408",
    950: "#101D03",
  },
  // Yellow Scale
  yellow: {
    50: "#FFFCF7",
    100: "#FFF5E7",
    200: "#FFEFD5",
    300: "#FFE5B8",
    400: "#FFDEA1",
    500: "#FFD578",
    600: "#FFCE4F",
    700: "#BF9602",
    800: "#7B6000",
    900: "#403000",
    950: "#271C00",
  },
  // Orange Scale
  orange: {
    50: "#FFF4F2",
    100: "#FFEDE9",
    200: "#FFDBD2",
    300: "#FEC8B9",
    400: "#FEB59F",
    500: "#FEA181",
    600: "#FE8B58",
    700: "#C95C0B",
    800: "#883C05",
    900: "#491D01",
    950: "#301000",
  },
  // Red Scale
  red: {
    50: "#FFF4F4",
    100: "#FFE5E5",
    200: "#FFCECE",
    300: "#FEB3B3",
    400: "#FE9A9A",
    500: "#FE7B7B",
    600: "#FE5858",
    700: "#D70606",
    800: "#930202",
    900: "#540101",
    950: "#390000",
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
    focus: colorTokens.blue[500], // #4495DE
  },
  brand: {
    primary: colorTokens.blue[600], // #4495DE
    primaryHover: colorTokens.blue[700], // #295F8F
    primaryActive: colorTokens.blue[800], // #194062
    secondary: colorTokens.orange[600], // #FE8B58
    accent: colorTokens.green[600], // #89CE3A
  },
  status: {
    success: colorTokens.green[600], // #89CE3A
    successBg: colorTokens.green[50], // #EEFEE4
    warning: colorTokens.yellow[600], // #FFCE4F
    warningBg: colorTokens.yellow[50], // #FFFCF7
    error: colorTokens.red[600], // #FE5858
    errorBg: colorTokens.red[50], // #FFF4F4
    info: colorTokens.blue[500], // #4495DE
    infoBg: colorTokens.blue[50], // #EEF4FD
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
    orange: {
      background: semanticTokens.brand.secondary,
      backgroundHover: colorTokens.orange[700],
      backgroundActive: colorTokens.orange[800],
      text: colorTokens.neutral[50],
      border: semanticTokens.brand.secondary,
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
  card: {
    background: colorTokens.neutral[50],
    border: semanticTokens.border.primary,
    shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    hoverShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  input: {
    background: colorTokens.neutral[50],
    border: semanticTokens.border.primary,
    borderHover: semanticTokens.border.secondary,
    borderFocus: semanticTokens.border.focus,
    placeholder: semanticTokens.text.disabled,
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
      main: semanticTokens.brand.primary, // #4495DE
      dark: semanticTokens.brand.primaryHover, // #295F8F
      light: colorTokens.blue[400], // #65AAF1
      contrastText: colorTokens.neutral[50],
    },
    secondary: {
      main: semanticTokens.brand.secondary, // #FE8B58
      dark: colorTokens.orange[700], // #C95C0B
      light: colorTokens.orange[400], // #FEB59F
      contrastText: colorTokens.neutral[50],
    },
    error: {
      main: semanticTokens.status.error, // #FE5858
      dark: colorTokens.red[700], // #D70606
      light: colorTokens.red[400], // #FE9A9A
      contrastText: colorTokens.neutral[50],
    },
    warning: {
      main: semanticTokens.status.warning, // #FFCE4F
      dark: colorTokens.yellow[700], // #BF9602
      light: colorTokens.yellow[400], // #FFDEA1
      contrastText: colorTokens.neutral[900],
    },
    info: {
      main: semanticTokens.status.info, // #4495DE
      dark: colorTokens.blue[700], // #295F8F
      light: colorTokens.blue[400], // #65AAF1
      contrastText: colorTokens.neutral[50],
    },
    success: {
      main: semanticTokens.status.success, // #89CE3A
      dark: colorTokens.green[700], // #639728
      light: colorTokens.green[400], // #9AE642
      contrastText: colorTokens.neutral[50],
    },
    divider: semanticTokens.border.primary,
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "46px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontSize: "24px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontSize: "16px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      color: semanticTokens.text.primary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      color: semanticTokens.text.secondary,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
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
            boxShadow: `0 0 0 3px ${colorTokens.blue[200]}`,
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
        containedSecondary: {
          backgroundColor: componentTokens.button.orange.background,
          color: componentTokens.button.orange.text,
          "&:hover": {
            backgroundColor: componentTokens.button.orange.backgroundHover,
            boxShadow: `0 0 0 3px ${colorTokens.orange[200]}`,
          },
        },
        containedSuccess: {
          backgroundColor: componentTokens.button.success.background,
          color: componentTokens.button.success.text,
          "&:hover": {
            backgroundColor: componentTokens.button.success.backgroundHover,
            boxShadow: `0 0 0 3px ${colorTokens.green[200]}`,
          },
        },
        containedWarning: {
          backgroundColor: componentTokens.button.warning.background,
          color: componentTokens.button.warning.text,
          "&:hover": {
            backgroundColor: componentTokens.button.warning.backgroundHover,
            boxShadow: `0 0 0 3px ${colorTokens.yellow[200]}`,
          },
        },
        containedError: {
          backgroundColor: componentTokens.button.error.background,
          color: componentTokens.button.error.text,
          "&:hover": {
            backgroundColor: componentTokens.button.error.backgroundHover,
            boxShadow: `0 0 0 3px ${colorTokens.red[200]}`,
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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: componentTokens.card.background,
          border: `1px solid ${componentTokens.card.border}`,
          boxShadow: componentTokens.card.shadow,
          "&:hover": {
            boxShadow: componentTokens.card.hoverShadow,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: componentTokens.input.background,
            "& fieldset": {
              borderColor: componentTokens.input.border,
            },
            "&:hover fieldset": {
              borderColor: componentTokens.input.borderHover,
            },
            "&.Mui-focused fieldset": {
              borderColor: componentTokens.input.borderFocus,
              boxShadow: `0 0 0 3px ${colorTokens.blue[200]}`,
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: componentTokens.input.placeholder,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
        colorPrimary: {
          backgroundColor: colorTokens.blue[100],
          color: colorTokens.blue[800],
          border: `1px solid ${colorTokens.blue[300]}`,
        },
        colorSecondary: {
          backgroundColor: colorTokens.orange[100],
          color: colorTokens.orange[800],
          border: `1px solid ${colorTokens.orange[300]}`,
        },
      },
    },
  },
});

// Export tokens for use in other components
export { colorTokens, semanticTokens, componentTokens };
export default theme;
