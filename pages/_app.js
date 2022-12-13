import "../styles/globals.css";
import { Layout } from "../components";
import { CartContext } from "../context/CartContext";
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}

export default MyApp;
