import "./App.css";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, blue } from "@mui/material/colors";


function App() {
 
  const theme = createTheme({
    palette: {
      primary: {
        main: blue["200"],
      },
      secondary: {
        main: blueGrey["900"],
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
