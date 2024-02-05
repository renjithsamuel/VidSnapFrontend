import "@/styles/globals.css";
import type { AppProps } from "next/app";
import customTheme from "@/styles/theme";
import { ThemeProvider } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { NoSsr } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient();

const clientSideEmotionCache = createEmotionCache();

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <NoSsr>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={customTheme}>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </CacheProvider>
    </NoSsr>
  );
}
