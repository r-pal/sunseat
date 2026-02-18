import { Box, Container, Paper, Typography } from "@mui/material";
import "./App.css";
import { Header } from "./components/Header";
import ThemeSwitcher from "./components/themeSwitcher";
import { ThemeContextProvider } from "./themeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Container maxWidth="lg">
          <Header />
          <Paper sx={{ p: 2 }}>
            <Box height={600} p={4}>
              <ThemeSwitcher />
              <Typography variant="h1">Heading</Typography>
            </Box>
          </Paper>
        </Container>
      </ThemeContextProvider>
    </>
  );
}

export default App;
