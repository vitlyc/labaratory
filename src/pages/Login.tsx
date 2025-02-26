import { Link } from "react-router-dom"

import { Grid, Stack, Typography, Card, Box, Divider } from "@mui/material"

import LoginForm from "./authentication/LoginForm"
import AuthWrapper from "./authentication/AuthWrapper"
import { JsxEmit } from "typescript"

const Login: React.FC = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{ height: `calc(100vh - var(--navbar-height))` }}
    // height={"100vh"}
  >
    <Card
      elevation={18}
      sx={(theme) => ({
        maxWidth: "75%",
        padding: "15px",
        [theme.breakpoints.up("md")]: {
          maxWidth: "55%",
        },
      })}
    >
      <Typography sx={{ padding: "10px 0 25px 0" }} variant="h3">
        Login
      </Typography>

      <LoginForm />
    </Card>
  </Grid>
)

export default Login
