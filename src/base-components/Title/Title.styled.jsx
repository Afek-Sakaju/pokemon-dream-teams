import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";

export const Box = styled(MuiBox)(({ theme }) => ({
    width: "100%",
    position: "absolute",
    top: 0,
    [theme.breakpoints.down("xs")]: {},
}));

export const HeaderText = styled("h1")(({ theme }) => ({
    textAlign: "center",
    fontSize: "1.85em",
    color: "white",
    userSelect: "none",
    width: "100%",
    margin: 0,
    marginTop: "10px",

    [theme.breakpoints.down("lg")]: {
        fontSize: "1.7em",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "1.25em",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.1em",
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: "0.9em",
    },
}));
