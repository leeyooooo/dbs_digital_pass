import {
  createTheme,
  MantineProvider,
  AppShell
} from "@mantine/core";

import "@mantine/core/styles.css";
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <AppShell padding="md">
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
