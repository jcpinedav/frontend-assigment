import { ApolloProvider } from "@/node_modules/@apollo/client/index";
import client from "../apollo";
//@ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
