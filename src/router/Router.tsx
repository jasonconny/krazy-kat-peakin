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

        <React.Suspense fallback={<Loading/>}>
            <Routes>
                <Route path={'/'} element={<PrimaryLayout/>}>
                    <Route index element={<HomeView/>}/>

                    <Route path={'members'} element={<LazyMembersView/>}/>
                    <Route path={'releases'} element={<LazyReleasesView/>}/>

                    <Route path={'*'} element={<NotFoundView/>}/>
                </Route>
            </Routes>
        </React.Suspense>
    </BrowserRouter>
);

export default Router;
