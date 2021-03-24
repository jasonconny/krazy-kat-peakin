import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from 'components/GlobalStyles';
import ScrollToTop from 'routes/ScrollToTop';
import DefaultRoutes from 'routes/Default';

const KrazyKatPeakin: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Krazy Kat Peakin'</title>
                <meta property='og:url' content={`/`} />
                <meta
                    property='og:description'
                    content={`Look for a while`}
                />
                <meta
                    property='og:title'
                    content={`Krazy Kat Peakin'`}
                />
                <meta property='og:image' content={`/images/og-image.png`} />
            </Helmet>

            <GlobalStyles>
                <BrowserRouter forceRefresh={false}>
                    <ScrollToTop/>

                    <Switch>
                        <Route path={'/'}>
                            <DefaultRoutes />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </GlobalStyles>
        </>
    );
};

const rootElement = document.getElementById('krazy-kat-peakin');
ReactDOM.render(<KrazyKatPeakin/>, rootElement);

export default KrazyKatPeakin;
