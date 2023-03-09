import {
  Box,
  Typography,
  useTheme,
  Chip,
  ButtonGroup,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material"
import Form from "../Form/Form"
import { tokens } from "../../theme"

const LoginPage = (): JSX.Element => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box maxWidth={"400px"} m={"0 auto"} pt={5}>
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        textAlign="center"
        sx={{ padding: "0 0 20px" }}
      >
        Login
      </Typography>

      <Form />
    </Box>
  )
}

export default LoginPage
