import Layout from "../components/layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  if (useRouter().pathname !== "/") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
