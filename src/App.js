import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./Profile";

const theme = createTheme(); // Ensure Material UI theme is set

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile />
    </ThemeProvider>
  );
}

export default App;
