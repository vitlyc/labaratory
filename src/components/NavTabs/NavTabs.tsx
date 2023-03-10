import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Box, Button, Typography, Slider } from "@mui/material"

type PathToValueMap = { [key: string]: number }

const NavTabs = () => {
  const [value, setValue] = useState<number>(0)
  const { pathname } = useLocation()

  const onChangeTab = (e: React.SyntheticEvent, value: number) => {
    setValue(value)
  }

  useEffect(() => {
    const pathToValueMap: PathToValueMap = { "/": 0, "/about": 1, "/login": 2 }

    setValue(pathToValueMap[pathname])
  }, [pathname, value])

  return (
    <Box>
      <Tabs
        value={value}
        onChange={onChangeTab}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab
          label="Home"
          component={Link}
          to="/"
          sx={{ fontSize: "20px", color: "#FFFBE6" }}
        />
        <Tab
          label="About"
          component={Link}
          to="/about"
          sx={{ fontSize: "20px", color: "#FFFBE6" }}
        />
        <Tab
          label="Login"
          component={Link}
          to="/login"
          sx={{ fontSize: "20px", color: "#FFFBE6" }}
        />
      </Tabs>
    </Box>
  )
}

export default NavTabs
