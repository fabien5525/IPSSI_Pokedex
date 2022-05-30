import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "components";
import { AppProvider } from "contexts/AppContext";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    colors: {
      primary: "#0d1117",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Nav />
          <Component {...pageProps}> </Component>
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
