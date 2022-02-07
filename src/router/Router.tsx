import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { PrimaryLayout } from 'components/layouts';
import HomeView from 'views/HomeView';
import MembersView from 'views/MembersView';
import ReleasesView from 'views/ReleasesView';
import NotFoundView from 'views/NotFoundView';

const Router: React.FC = () => (
    <BrowserRouter>
        <ScrollToTop/>

        <Routes>
            <Route path={'/'} element={<PrimaryLayout/>}>
                <Route index element={<HomeView/>}/>
                <Route path={'home'} element={<HomeView/>}/>
                <Route path={'members'} element={<MembersView/>}/>
                <Route path={'releases'} element={<ReleasesView/>}/>
                <Route path={'*'} element={<NotFoundView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
