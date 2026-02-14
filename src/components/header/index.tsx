import { SubTitle, Title, useStyles } from "./styles";

export const Header: React.FC = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Title>Sun-Seat</Title>
      <SubTitle>Get sat right</SubTitle>
    </header>
  );
};
