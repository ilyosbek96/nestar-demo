import type { AppProps } from "next/app";
import { light } from "../scss/MaterialTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme());
  return <Component {...pageProps} />;
}
