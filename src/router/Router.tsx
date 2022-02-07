import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Loading from 'components/Loading';
import { PrimaryLayout } from 'components/layouts';
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView';

const LazyMembersView = React.lazy(() => import('views/MembersView'));
const LazyReleasesView = React.lazy(() => import('views/ReleasesView'));

const Router: React.FC = () => (
    <BrowserRouter>
        <ScrollToTop/>

        <Routes>
            <Route path={'/'} element={<PrimaryLayout/>}>
                <Route index element={<HomeView/>}/>
                <Route path={'home'} element={<HomeView/>}/>
                <Route path={'members'} element={
                    <React.Suspense fallback={<Loading/>}>
                        <LazyMembersView/>
                    </React.Suspense>
                }/>
                <Route path={'releases'} element={
                    <React.Suspense fallback={<Loading/>}>
                        <LazyReleasesView/>
                    </React.Suspense>
                }/>
                <Route path={'*'} element={<NotFoundView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
