import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export const Header = (): JSX.Element => {
  return (
    <>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
      <Box bgcolor={"primary.light"} height={"300px"}>
        BOX
      </Box>
    </>
  )
}
