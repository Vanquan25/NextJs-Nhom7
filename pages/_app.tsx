import '../styles/globals.scss'
import Layout from '../component/Layout';
import { AppPropsWithLayout } from '../component/models/layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LatoutWrapper = Component.Layout ?? Layout;
  return (
  <LatoutWrapper>
    <SWRConfig value={{fetcher: async (url) => await instance.get(url) }}><Component {...pageProps} /></SWRConfig>
  </LatoutWrapper>
  );
}

export default MyApp
