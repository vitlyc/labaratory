// material-ui
import { Box } from "@mui/material"
import Karl from "../../assets/pure Karl.png"

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        filter: "blur(6px)",
        zIndex: -1,
        bottom: 0,
      }}
      width="50vh"
    >
      <img src={Karl} alt="Karl photo" height="100%" width="100%" />
    </Box>
  )
}

export default AuthBackground
