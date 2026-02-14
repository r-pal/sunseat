import { blueGrey, deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Header } from "./components/header";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: blueGrey,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
