import { Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"
import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"
import About from "./components/About/About"
import LoginPage from "./components/Login/Login2"
import { Header } from "./components/Header/Header"

export const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Navbar /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
