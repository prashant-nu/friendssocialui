import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import Header from "../Header";

function TopBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" justifyContent={"end"} width={"100%"}>
          <Header />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
