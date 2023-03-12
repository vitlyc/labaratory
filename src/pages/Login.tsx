import { Link } from "react-router-dom"

import { Grid, Stack, Typography } from "@mui/material"

import AuthLogin from "./authentication/AuthLogin"
import AuthWrapper from "./authentication/AuthWrapper"
import { JsxEmit } from "typescript"

const Login: React.FC = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}
        >
          <Typography variant="h3">Войдите</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthLogin />
      </Grid>
    </Grid>
  </AuthWrapper>
)

export default Login
