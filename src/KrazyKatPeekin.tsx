import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './routes/ScrollToTop';
import DefaultRoutes from './routes/Default';

const KrazyKatPeekin: React.FC = () => {
    return (
        <GlobalStyles>
            <BrowserRouter forceRefresh={false}>
                <ScrollToTop/>

                <Switch>
                    <Route path={'/'}>
                        <DefaultRoutes/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </GlobalStyles>
    );
};

const rootElement = document.getElementById('krazy-kat-peekin');
ReactDOM.render(<KrazyKatPeekin/>, rootElement);

export default KrazyKatPeekin;
