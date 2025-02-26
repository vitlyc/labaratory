import { createContext, useState, useMemo } from "react"
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles"

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e1e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
})

export const themeSettings = (mode: string) => {
  const colors = tokens(mode)
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: "#37966F",
              main: "#356859",
              light: "#B9E4C9",
            },
            secondary: {
              main: "#FD5523",
            },
            light: "#B9E4C9",
            background: {
              paper: "#FFFBE6",
              default: "#FFFBE6",
            },
            text: {
              primary: "#356859",
              secondary: "#FFFBE6",
              light: "#B9E4C9",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    a: {
      fontSize: "12rem",
    },
  }
}
type ColorMode = {
  toggleColorMode: () => void
}
type UseModeReturnType = [Theme, ColorMode]

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export const useMode = (): UseModeReturnType => {
  const [mode, setMode] = useState("light")

  const colorMode = useMemo<ColorMode>(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  )

  const theme = useMemo<Theme>(
    () => createTheme(themeSettings(mode) as ThemeOptions),
    [mode]
  )

  return [theme, colorMode]
}

const secTheme = {
  primary: {
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
  },
  secondary: {
    lightest: "#F8F9FA",
    light: "#F3F4F6",
    main: "#6C737F",
    dark: "#384250",
    darkest: "#111927",
  },
  error: {
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
  },
  warning: {
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
  },
  info: {
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
  },
  success: {
    lightest: "#F0FDF9",
    light: "#CCFBEF",
    main: "#15B79E",
    dark: "#107569",
    darkest: "#134E48",
  },
  purple: {
    lightest: "#F9F5FF",
    light: "#F4EBFF",
    main: "#9E77ED",
    dark: "#6941C6",
    darkest: "#42307D",
  },
  indigo: {
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
  },
  green: {
    lightest: "#F6FEF9",
    light: "#EDFCF2",
    main: "#16B364",
    dark: "#087443",
    darkest: "#084C2E",
  },
  blue: {
    lightest: "#F5F8FF",
    light: "#EBEFFF",
    main: "#2970FF",
    dark: "#004EEB",
    darkest: "#00359E",
  },
}

const componentsTheme = {
  dark: {
    mainBackground: "#1c2536",
    compBackground: "#111927",
    textPrimary: "#edf2f7",
    textSecondary: "#a0aec0",
  },
  light: {
    mainBackground: "#f3f4f6",
    compBackground: "#ffffff",
    textPrimary: "#111927",
    textSecondary: "#6c737f",
  },
}
