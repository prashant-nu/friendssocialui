import { Box, Container, styled, Toolbar } from "@mui/material";
import React from "react";
import TopBar from "../components/TopBar";
// import Sidebar, { collapsedWidth, drawerWidth } from "../../components/Sidebar";

const StyledDiv = styled(Box)(({}) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  //   paddingLeft: drawerWidth,
  //   "&.collapsed": {
  //     paddingLeft: collapsedWidth,
  //   },
}));

const Logged = ({ children }: { children: JSX.Element }) => {
  return (
    <Box display="flex">
      {/* <Sidebar open={open} setOpen={setOpen} /> */}
      <StyledDiv>
        <TopBar />
        {/* This is added so that container is below topbar */}
        <Toolbar />
        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            padding: "24px 32px",
          }}
        >
          {children}
        </Container>
      </StyledDiv>
    </Box>
  );
};

export default Logged;
