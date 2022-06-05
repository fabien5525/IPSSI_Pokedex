import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "components";
import { AppProvider } from "contexts/AppContext";
import styled, { ThemeProvider } from "styled-components";
import { ModalProvider } from "contexts/Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
`;

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
          <ModalProvider>
            <Nav />
            <Container>
              <Component {...pageProps}> </Component>
            </Container>
          </ModalProvider>
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
