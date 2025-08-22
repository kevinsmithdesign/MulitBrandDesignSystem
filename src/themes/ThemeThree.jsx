import { createTheme } from "@mui/material";

// Design Tokens - Brand Primitives
const colorTokens = {
  // Blue Scale
  blue: {
    50: "#EBF1FF",
    100: "#D6E3FE",
    200: "#ABC7FE",
    300: "#78ACFD",
    400: "#2193FC",
    500: "#1376CE",
    600: "#0C5EA6",
    700: "#07457D",
    800: "#04315B",
    900: "#011C38",
    950: "#011126",
  },
  // Green Scale (Primary brand color)
  green: {
    50: "#C3FFCF",
    100: "#7FFF9F",
    200: "#06EB69",
    300: "#01CE5B",
    400: "#03B04D",
    500: "#019540",
    600: "#007C34",
    700: "#015D25",
    800: "#004118",
    900: "#00240A",
    950: "#001805",
  },
  // Yellow Scale
  yellow: {
    50: "#FFF8F0",
    100: "#FFF5E8",
    200: "#FFE8C7",
    300: "#FFDEAB",
    400: "#FFD07A",
    500: "#FFC63E",
    600: "#F5BB02",
    700: "#B38800",
    800: "#785A01",
    900: "#3F2E00",
    950: "#251A00",
  },
  // Red Scale
  red: {
    50: "#FCEAEA",
    100: "#FAD8D8",
    200: "#F6AFAF",
    300: "#F38283",
    400: "#F1484B",
    500: "#CB292D",
    600: "#9B1D20",
    700: "#761416",
    800: "#570C0D",
    900: "#360505",
    950: "#250203",
  },
  // Orange Scale
  orange: {
    50: "#FFF4F2",
    100: "#FFE9E4",
    200: "#FFD3C7",
    300: "#FFC0AE",
    400: "#FFA98C",
    500: "#FF9060",
    600: "#FF7700",
    700: "#BD5700",
    800: "#813901",
    900: "#461B00",
    950: "#2C0F00",
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
    focus: colorTokens.green[500], // #019540
  },
  brand: {
    primary: colorTokens.green[600], // #007C34
    primaryHover: colorTokens.green[700], // #015D25
    primaryActive: colorTokens.green[800], // #004118
    secondary: colorTokens.blue[600], // #0C5EA6
    accent: colorTokens.orange[600], // #FF7700
  },
  status: {
    success: colorTokens.green[600], // #007C34
    successBg: colorTokens.green[50], // #C3FFCF
    warning: colorTokens.yellow[600], // #F5BB02
    warningBg: colorTokens.yellow[50], // #FFF8F0
    error: colorTokens.red[600], // #9B1D20
    errorBg: colorTokens.red[50], // #FCEAEA
    info: colorTokens.blue[600], // #0C5EA6
    infoBg: colorTokens.blue[50], // #EBF1FF
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
      backgroundHover: colorTokens.green[50],
      backgroundActive: colorTokens.green[100],
      text: semanticTokens.brand.primary,
      border: semanticTokens.brand.primary,
    },
    blue: {
      background: semanticTokens.brand.secondary,
      backgroundHover: colorTokens.blue[700],
      backgroundActive: colorTokens.blue[800],
      text: colorTokens.neutral[50],
      border: semanticTokens.brand.secondary,
    },
    orange: {
      background: semanticTokens.brand.accent,
      backgroundHover: colorTokens.orange[700],
      backgroundActive: colorTokens.orange[800],
      text: colorTokens.neutral[50],
      border: semanticTokens.brand.accent,
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
  navigation: {
    background: semanticTokens.brand.primary,
    text: colorTokens.neutral[50],
    activeBackground: colorTokens.green[700],
    hoverBackground: colorTokens.green[500],
  },
  badge: {
    primary: {
      background: semanticTokens.brand.primary,
      text: colorTokens.neutral[50],
    },
    secondary: {
      background: semanticTokens.brand.secondary,
      text: colorTokens.neutral[50],
    },
    accent: {
      background: semanticTokens.brand.accent,
      text: colorTokens.neutral[50],
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
      main: semanticTokens.brand.primary, // #007C34
      dark: semanticTokens.brand.primaryHover, // #015D25
      light: colorTokens.green[400], // #03B04D
      contrastText: colorTokens.neutral[50],
    },
    secondary: {
      main: semanticTokens.brand.secondary, // #0C5EA6
      dark: colorTokens.blue[700], // #07457D
      light: colorTokens.blue[400], // #2193FC
      contrastText: colorTokens.neutral[50],
    },
    error: {
      main: semanticTokens.status.error, // #9B1D20
      dark: colorTokens.red[700], // #761416
      light: colorTokens.red[400], // #F1484B
      contrastText: colorTokens.neutral[50],
    },
    warning: {
      main: semanticTokens.status.warning, // #F5BB02
      dark: colorTokens.yellow[700], // #B38800
      light: colorTokens.yellow[400], // #FFD07A
      contrastText: colorTokens.neutral[900],
    },
    info: {
      main: semanticTokens.status.info, // #0C5EA6
      dark: colorTokens.blue[700], // #07457D
      light: colorTokens.blue[400], // #2193FC
      contrastText: colorTokens.neutral[50],
    },
    success: {
      main: semanticTokens.status.success, // #007C34
      dark: colorTokens.green[700], // #015D25
      light: colorTokens.green[400], // #03B04D
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
            boxShadow: `0 0 0 3px ${colorTokens.green[200]}`,
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
          backgroundColor: componentTokens.button.blue.background,
          color: componentTokens.button.blue.text,
          "&:hover": {
            backgroundColor: componentTokens.button.blue.backgroundHover,
            boxShadow: `0 0 0 3px ${colorTokens.blue[200]}`,
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
      variants: [
        {
          props: { variant: "contained", color: "orange" },
          style: {
            backgroundColor: componentTokens.button.orange.background,
            color: componentTokens.button.orange.text,
            "&:hover": {
              backgroundColor: componentTokens.button.orange.backgroundHover,
              boxShadow: `0 0 0 3px ${colorTokens.orange[200]}`,
            },
          },
        },
      ],
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
              boxShadow: `0 0 0 3px ${colorTokens.green[200]}`,
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
          backgroundColor: colorTokens.green[100],
          color: colorTokens.green[800],
          border: `1px solid ${colorTokens.green[300]}`,
        },
        colorSecondary: {
          backgroundColor: colorTokens.blue[100],
          color: colorTokens.blue[800],
          border: `1px solid ${colorTokens.blue[300]}`,
        },
      },
      variants: [
        {
          props: { color: "orange" },
          style: {
            backgroundColor: colorTokens.orange[100],
            color: colorTokens.orange[800],
            border: `1px solid ${colorTokens.orange[300]}`,
          },
        },
      ],
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: componentTokens.badge.primary.background,
          color: componentTokens.badge.primary.text,
        },
        colorSecondary: {
          backgroundColor: componentTokens.badge.secondary.background,
          color: componentTokens.badge.secondary.text,
        },
      },
      variants: [
        {
          props: { color: "orange" },
          style: {
            backgroundColor: componentTokens.badge.accent.background,
            color: componentTokens.badge.accent.text,
          },
        },
      ],
    },
  },
});

// Export tokens for use in other components
export { colorTokens, semanticTokens, componentTokens };
export default theme;
