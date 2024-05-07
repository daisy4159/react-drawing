import React from "react";
import { MainAppBar, SideDrawer } from "./components/navigations";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { DrawingContainer } from "./components/drawings/DrawingContainer";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => {
  return {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
});

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <MainAppBar drawerOpenHandler={toggleDrawer} />
      <SideDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
      <Main>
        <DrawingContainer />
      </Main>
    </ThemeProvider>
  );
}

export default App;
