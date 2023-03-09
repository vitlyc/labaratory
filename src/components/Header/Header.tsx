import React, { useState } from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import NavTabs from "../NavTabs/NavTabs"

export const Header = (): JSX.Element => {
  return (
    <>
      <AppBar position="sticky" color="secondary" enableColorOnDark>
        <Toolbar>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </>
  )
}
