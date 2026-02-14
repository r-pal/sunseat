import { styled } from "@mui/material";
import { makeStyles } from "tss-react/mui";

//element / mui5+ way
export const Title = styled("div")({
  color: "red",
  fontWeight: "bold",
});

export const SubTitle = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontStyle: "italic",
}));

// add types when adding custom props

//class / mui4 way
//! import from tss-react, not from mui
export const useStyles = makeStyles()((theme) => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    height: 24,
    position: "fixed",
    top: 0,
  },
}));
