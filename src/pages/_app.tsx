
import { appWithTranslation } from 'next-i18next';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
