import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainAppBar, SideDrawer } from "./components/navigations";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainAppBar drawerOpenHandler={toggleDrawer} />
      <SideDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
    </ThemeProvider>
  );
}

export default App;
