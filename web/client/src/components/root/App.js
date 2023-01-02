import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
// import { Button, TextField, Select, MenuItem } from "@mui/material";
import { Logger, WebConsoleTransport } from "@micromon/logger";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const logger = Logger().create({
    transport: WebConsoleTransport()
  })

  React.useEffect(() => {
    logger.info("Информационое сообщение")
    logger.warn("Предупредительное сообщение")
    logger.error("Сообщение об ошибке")
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>Client</div>
    </ThemeProvider>
  );
}

export default App;
