import {
  createTheme,
  MantineProvider,
  AppShell,
  BackgroundImage,
  Image
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
      <BackgroundImage bgsz={"cover"} src={Background.src}>
        <Image src={Title.src} />
        <AppShell>
          <AppShell.Main p={"sm"}>
            <Component {...pageProps} />
          </AppShell.Main>
        </AppShell>
      </BackgroundImage>
    </MantineProvider>
  );
}
