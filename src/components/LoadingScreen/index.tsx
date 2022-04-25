import { Box, LinearProgress, styled } from "@mui/material";
import NProgress from "nprogress";
import React, { useEffect } from "react";
const StyledDiv = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  left: 0,
  padding: theme.spacing(3),
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 2000,
}));

const LoadingScreen = () => {
  // const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <StyledDiv>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </StyledDiv>
  );
};

export default LoadingScreen;
