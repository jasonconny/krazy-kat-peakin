import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'components/GlobalStyles';
import ArtistProvider from 'providers/ArtistProvider';
import ReleasesProvider from 'providers/ReleasesProvider';
import ScrollToTop from 'routes/ScrollToTop';
import DefaultRoutes from 'routes/Default';

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
                <ArtistProvider artistId={ARTIST_ID}>
                    <ReleasesProvider artistId={ARTIST_ID}>
                        <BrowserRouter forceRefresh={false}>
                            <ScrollToTop/>

                            <DefaultRoutes />
                        </BrowserRouter>
                    </ReleasesProvider>
                </ArtistProvider>
            </GlobalStyles>
        </>
    );
};

const rootElement = document.getElementById('krazy-kat-peakin');
ReactDOM.render(<KrazyKatPeakin/>, rootElement);

export default KrazyKatPeakin;
