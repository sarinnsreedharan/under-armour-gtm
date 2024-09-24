import "@/styles/globals.css";
import useGTM from "@/hooks/useGTM";

export default function App({ Component, pageProps }) {
  useGTM();
  return <Component {...pageProps} />;
}
