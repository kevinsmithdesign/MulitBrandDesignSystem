import { createTheme } from "@mui/material";

// Design Tokens - Brand Primitives
const colorTokens = {
  // Purple Scale (Primary brand color)
  purple: {
    50: "#F2EFFD",
    100: "#E5DFFB",
    200: "#D3C5F6",
    300: "#BFA7F2",
    400: "#AB89EE",
    500: "#996AE9",
    600: "#8847E2",
    700: "#682BB5",
    800: "#491C81",
    900: "#290C4C",
    950: "#1C0737",
  },
  // Green Scale
  green: {
    50: "#E3FEDD",
    100: "#C3FDB5",
    200: "#82FB4E",
    300: "#78E848",
    400: "#6ED641",
    500: "#5CB536",
    600: "#5CB536",
    700: "#438626",
    800: "#2A5816",
    900: "#143008",
    950: "#091C03",
  },
  // Yellow Scale
  yellow: {
    50: "#FEF8F1",
    100: "#FEF5EA",
    200: "#FDEBD3",
    300: "#FCE2BA",
    400: "#FBD593",
    500: "#FACB6B",
    600: "#F6C249",
    700: "#B58E33",
    800: "#785D1F",
    900: "#3D2E0B",
    950: "#241A04",
  },
  // Red Scale
  red: {
    50: "#FBF1F1",
    100: "#F8E3E3",
    200: "#F2C8C8",
    300: "#EDAEAE",
    400: "#E89090",
    500: "#E56F6F",
    600: "#E24747",
    700: "#AB3333",
    800: "#772121",
    900: "#430F0F",
    950: "#2F0808",
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
    focus: colorTokens.red[500], // #E56F6F
  },
  brand: {
    primary: colorTokens.red[600], // #E24747
    primaryHover: colorTokens.red[700], // #AB3333
    primaryActive: colorTokens.red[800], // #772121
    secondary: colorTokens.purple[600], // #8847E2
    accent: colorTokens.purple[400], // #AB89EE
  },
  status: {
    success: colorTokens.green[600], // #5CB536
    successBg: colorTokens.green[50], // #E3FEDD
    warning: colorTokens.yellow[600], // #F6C249
    warningBg: colorTokens.yellow[50], // #FEF8F1
    error: colorTokens.red[600], // #E24747
    errorBg: colorTokens.red[50], // #FBF1F1
    info: colorTokens.red[500], // #E56F6F
    infoBg: colorTokens.red[50], // #FBF1F1
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
      backgroundHover: colorTokens.purple[50],
      backgroundActive: colorTokens.purple[100],
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
      text: colorTokens.red[800],
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
      main: semanticTokens.brand.primary, // #E24747
      dark: semanticTokens.brand.primaryHover, // #AB3333
      light: colorTokens.red[400], // #E89090
      contrastText: colorTokens.neutral[50],
    },
    secondary: {
      main: semanticTokens.brand.secondary, // #8847E2
      dark: colorTokens.purple[700], // #682BB5
      light: colorTokens.purple[300], // #BFA7F2
      contrastText: colorTokens.neutral[50],
    },
    error: {
      main: semanticTokens.status.error, // #E24747
      dark: colorTokens.red[700], // #AB3333
      light: colorTokens.red[400], // #E89090
      contrastText: colorTokens.neutral[50],
    },
    warning: {
      main: semanticTokens.status.warning, // #F6C249
      dark: colorTokens.yellow[700], // #B58E33
      light: colorTokens.yellow[400], // #FBD593
      contrastText: colorTokens.neutral[900],
    },
    info: {
      main: semanticTokens.status.info, // #E56F6F
      dark: colorTokens.red[700], // #AB3333
      light: colorTokens.red[400], // #E89090
      contrastText: colorTokens.neutral[50],
    },
    success: {
      main: semanticTokens.status.success, // #5CB536
      dark: colorTokens.green[700], // #438626
      light: colorTokens.green[400], // #6ED641
      contrastText: colorTokens.neutral[50],
    },
    divider: semanticTokens.border.primary,
  },
  typography: {
    h1: {
      fontSize: "46px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    h4: {
      fontSize: "24px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    h6: {
      fontSize: "16px",
      fontWeight: "normal",
      color: semanticTokens.text.primary,
    },
    body1: {
      color: semanticTokens.text.primary,
    },
    body2: {
      color: semanticTokens.text.secondary,
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
            boxShadow: `0 0 0 3px ${colorTokens.red[200]}`,
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
              boxShadow: `0 0 0 3px ${colorTokens.red[200]}`,
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: componentTokens.input.placeholder,
          },
        },
      },
    },
  },
});

// Export tokens for use in other components
export { colorTokens, semanticTokens, componentTokens };
export default theme;
