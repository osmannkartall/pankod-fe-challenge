import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "@styles/global.css";
import { useProgramsDB } from "src/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { programsDB, createProgramsDB } = useProgramsDB();
  
  useEffect(() => {
    if (!programsDB.length) {
      createProgramsDB();
    }
  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
