import { Box, Container, CssBaseline, Paper } from "@mui/material";
import "./App.css";
import { Header } from "./components/Header";
import ThemeSwitcher from "./components/themeSwitcher";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Paper sx={{ p: 2 }}>
          <Box height={600} p={4}></Box>
        </Paper>
        <ThemeSwitcher />
      </Container>
    </>
  );
}

export default App;
