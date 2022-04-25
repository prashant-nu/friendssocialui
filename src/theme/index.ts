import { createTheme, Theme } from "@mui/material";

export const colors = {
  inputBorder: "#F3F4FB",
  lightText: "#9FA2B6",
  lightBlueGray: "#F8F8FB",
  primaryTextColor: "#000000",
  link: "#551A8B",
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};
export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#E9706D",
    },
    secondary: {
      main: "#1877f2",
    },
    // t
    // background: {
    //   default: "#F8F8FB",
    // },
    // grey: {
    //   400: "#D2D4DE",
    // },
  },
  breakpoints,

  typography: {
    //  do not change h1
    h1: {
      fontSize: "3rem",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "2.125rem",
      },
      fontWeight: "bold",
      lineHeight: "4.188rem",
    },
    //     // do not change h2
    h2: {
      fontSize: "1.375rem",
      lineHeight: "2.125rem",
    },
    //     // do not change h3
    h3: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    //     // do not change h4
    //     h4: {
    //       fontSize: "3rem",
    //       fontWeight: 700,
    //       [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
    //         fontSize: "2rem",
    //       },
    //       [`@media screen and (max-width: ${breakpoints.values.xs}px)`]: {
    //         fontSize: "1rem",
    //       },
    //     },
    // body1: {
    //   fontSize: "0.875rem",
    //   fontWeight: 400,
    //   lineHeight: "1.25rem",
    // },
    //     // do not change
    //     // body2: {
    //     //   fontSize: "1.25rem",
    //     //   fontWeight: 700,
    //     // },
    //     subtitle1: {
    //       fontSize: "0.75rem",
    //     },
    //     subtitle2: {
    //       fontSize: "0.85rem",
    //     },
  },
});
theme.components = {
  ...theme.components,
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "inherit",
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: "12px",
  //       },
  //     },
  //   },
  //   MuiDivider: {
  //     styleOverrides: {
  //       root: {
  //         color: "#F3F4FB",
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: "12px",
  //         borderColor: colors.inputBorder,
  //         "& .MuiOutlinedInput-notchedOutline": {
  //           borderColor: colors.inputBorder,
  //         },
  //         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //           borderWidth: "1px",
  //         },
  //       },
  //     },
  //   },
  //   MuiSelect: {
  //     styleOverrides: {
  //       icon: {
  //         color: "D2D4DE",
  //       },
  //     },
  //   },

  //   MuiInputLabel: {
  //     styleOverrides: {
  //       root: {
  //         color: "#676973",
  //         "& .MuiInputLabel-asterisk": {
  //           color: "red",
  //         },
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         color: "#676973",
  //         input: {
  //           "&::placeholder": {
  //             opacity: 0.6,
  //           },
  //         },
  //         "textarea::-webkit-input-placeholder": {
  //           opacity: 0.6,
  //         },
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: "14px",
  //         "& .MuiOutlinedInput-notchedOutline": {
  //           borderWidth: "1px",
  //         },
  //         "& .MuiFormHelperText-root.Mui-error": {
  //           transformOrigin: "bottom left",
  //           position: "relative",
  //           left: 0,
  //           bottom: 0,
  //           display: "block",
  //           transform: "translate(1px, 9px)",
  //           zIndex: 1,
  //           background: "white",
  //         },
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     defaultProps: {
  //       disableElevation: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         textTransform: "none",
  //         fontSize: "1rem",
  //         borderRadius: "12px",
  //         boxShadow: "none",
  //         "&.MuiButton-containedSecondary": {
  //           "&.Mui-disabled": {
  //             backgroundColor: theme.palette.common.white,
  //             color: "#EDEDED",
  //           },
  //         },
  //         "&.MuiButton-fullWidth .MuiButton-endIcon": {
  //           position: "absolute",
  //           right: "1rem",
  //           "& .MuiSvgIcon-fontSizeSmall": {
  //             fontSize: "12px",
  //           },
  //         },
  //       },
  //       sizeLarge: {
  //         minHeight: "54px",
  //       },
  //       sizeMedium: {
  //         minHeight: "40px",
  //       },
  //     },
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         color: theme.palette.common.black,
  //       },
  //     },
  //   },
  //   MuiCheckbox: {
  //     styleOverrides: {
  //       root: {
  //         "&.MuiCheckbox-colorDefault": {
  //           color: "#D2D4DE",
  //           "&.Mui-checked": {
  //             "& .MuiSvgIcon-root": {
  //               fill: "#9FA2B6",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: "rgba(0.1, 0.1, 0.1, 0.2) 0px 2px 10px -1px",
  //       },
  //     },
  //   },
  //   MuiSwitch: {
  //     styleOverrides: {
  //       root: {
  //         padding: 0,
  //         "& .MuiSwitch-switchBase": {
  //           margin: 2,
  //           padding: 0,
  //           transitionDuration: "300ms",
  //           "&.Mui-checked": {
  //             transform: "translateX(15px)",
  //             color: theme.palette.common.white,
  //             "& + .MuiSwitch-track": {
  //               backgroundColor: theme.palette.primary.main,
  //               opacity: 1,
  //             },
  //           },
  //         },
  //         "& .MuiSwitch-thumb": {
  //           boxSizing: "border-box",
  //         },
  //         "& .MuiSwitch-track": {
  //           borderRadius: "16px",
  //           backgroundColor: theme.palette.text.primary,
  //           opacity: 1,
  //         },
  //       },
  //       sizeSmall: {
  //         width: "35px",
  //         height: "20px",
  //       },
  //       sizeMedium: {
  //         width: "51px",
  //         height: "29px",
  //         "& .MuiSwitch-thumb": {
  //           width: "25px",
  //           height: "25px",
  //         },
  //         "& .MuiSwitch-switchBase": {
  //           "&.Mui-checked": {
  //             transform: "translateX(22px)",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         color: "#000000",
  //       },
  //     },
  //   },
  //   MuiLink: {
  //     styleOverrides: {
  //       root: {
  //         textDecoration: "none",
  //         color: theme.palette.text.primary,
  //       },
  //     },
  //   },
  //   MuiTab: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         textTransform: "none",
  //         backgroundColor: theme.palette.common.white,
  //         borderTopLeftRadius: "12px",
  //         borderTopRightRadius: "12px",
  //         opacity: 0.54,
  //         color: "#D2D4DE",
  //         "&.Mui-selected": {
  //           background: theme.palette.common.white,
  //           color: theme.palette.common.black,
  //           opacity: 1,
  //         },
  //       },
  //     },
  //   },

  //   MuiButtonBase: {
  //     styleOverrides: {
  //       root: {
  //         "&.MuiPickersDay-root": {
  //           color: theme.palette.common.black,
  //           "&:not(.Mui-selected)": {
  //             border: "0px",
  //           },
  //           "&:focus": {
  //             backgroundColor: theme.palette.common.white,
  //           },
  //           "&.Mui-selected": {
  //             backgroundColor: theme.palette.primary.main,
  //           },
  //           "&:focus.Mui-selected": {
  //             backgroundColor: theme.palette.primary.main,
  //           },
  //         },
  //       },
  //     },
  //   },
};

export default theme;
