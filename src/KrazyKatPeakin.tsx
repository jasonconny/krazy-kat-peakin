import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'components/GlobalStyles';
import KrazyKatProvider from 'providers/KrazyKatProvider';
import AppRouter from 'routes/AppRouter';

const KrazyKatPeakin: React.FC = () => {
    const ARTIST_ID = 246650;

    return (
        <>
            <Helmet>
                <title>Krazy Kat Peakin'</title>
                <meta property='og:url' content={'/'} />
                <meta
                    property='og:description'
                    content={'Look for a while'}
                />
                <meta
                    property='og:title'
                    content={'Krazy Kat Peakin\''}
                />
                <meta property='og:image' content={'/images/og-image.png'} />
            </Helmet>

            <GlobalStyles>
                <KrazyKatProvider artistId={ARTIST_ID}>
                    <AppRouter/>
                </KrazyKatProvider>
            </GlobalStyles>
        </>
    );
};

const rootElement = document.getElementById('krazy-kat-peakin');
ReactDOM.render(<KrazyKatPeakin/>, rootElement);

export default KrazyKatPeakin;
