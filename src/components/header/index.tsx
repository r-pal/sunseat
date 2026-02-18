import { Grid } from "@mui/material";
import { SubTitle, Title, useStyles } from "./styles";

export const Header: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.header}>
      <Title>Sun-Seat</Title>
      <SubTitle>Get sat right</SubTitle>
    </Grid>
  );
};
