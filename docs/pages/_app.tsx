import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // Ensure locale is set to 'nl' if not already set
    if (!router.locale) {
      router.replace(router.asPath, router.asPath, { locale: 'nl' });
    }
    // Only run once on mount with no dependencies
  }, []);

  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
