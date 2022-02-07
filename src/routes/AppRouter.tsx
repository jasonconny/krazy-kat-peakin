import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import DefaultRoutes from './DefaultRoutes';

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <ScrollToTop/>

        <DefaultRoutes/>
    </BrowserRouter>
);

export default AppRouter;
