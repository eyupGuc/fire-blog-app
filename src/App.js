import "./App.css";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, blue,cyan,purple,green } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[700],
      },
      secondary: {
        main: cyan[800],
      },
    },
  });
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
