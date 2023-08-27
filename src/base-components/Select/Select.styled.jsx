import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MuiMenuItem from "@mui/material/MenuItem";

export const MuiSelect = styled(Select)(({ theme }) => ({
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: 1,
    marginTop: "100px",
    backgroundColor: "white",
    width: "152px",
    fontSize: "0.53em",

    [theme.breakpoints.down("lg")]: {
        top: "unset",
        bottom: "15px",
        right: "30px",
        marginTop: "100px",
        fontSize: "0.48em",
        width: "145px",
    },
    [theme.breakpoints.down("md")]: {
        right: "20px",
        height: "40px",
        width: "135px",
        fontSize: "0.45em",
    },
    [theme.breakpoints.down("sm")]: {
        bottom: "10px",
        right: "5px",
        width: "130px",
        fontSize: "0.42em",
    },
    [theme.breakpoints.down("xs")]: {
        bottom: "unset",
        right: "unset",
        top: "80px",
        height: "40px",
        width: "145px",
        fontSize: "0.48em",
    },
}));

export const MenuItem = MuiMenuItem;
