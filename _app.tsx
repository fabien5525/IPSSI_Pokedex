import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "components/atoms";
import "components/atoms/Nav/Nav.scss";
import { AppProvider } from "contexts/AppContext";
import { ModalProvider } from "contexts/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <ModalProvider>
        <Nav />
        <Component {...pageProps}> </Component>
        </ModalProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
