import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "components/atoms";
import "components/atoms/Nav/Nav.scss";
import { AppProvider } from "contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Nav />
        <Component {...pageProps}> </Component>
      </AppProvider>
    </>
  );
}

export default MyApp;
