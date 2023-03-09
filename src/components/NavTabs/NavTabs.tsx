import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

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
    <Tabs
      value={value}
      onChange={onChangeTab}
      aria-label=""
      indicatorColor="secondary"
      component="nav"
    >
      <Tab label="Home" component={Link} to="/" />
      <Tab label="About" component={Link} to="/about" />
      <Tab label="Login" component={Link} to="/login" />
    </Tabs>
  )
}

export default NavTabs
