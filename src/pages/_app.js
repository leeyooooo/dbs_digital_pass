import {
  createTheme,
  MantineProvider,
  AppShell,
  BackgroundImage,
  Image,
} from "@mantine/core";

import "@mantine/core/styles.css";

import Background from "../assets/Background.png";
import Title from "../assets/Title.png";
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <BackgroundImage bgsz={"cover"} src={Background.src} h={"844px"} p={"md"}>
        <Image src={Title.src} />
        <Component {...pageProps} />
      </BackgroundImage>
    </MantineProvider>
  );
}
