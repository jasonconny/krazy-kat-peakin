import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import GratefulDeadProvider from '../providers/GratefulDeadProvider';
import Loading from '../components/Loading';

// ATTENTION!!
// The webpackChunkName comment is important. webpack uses this to magically create chunked code bundles.
// The value *must* be unique and ideally match the corresponding const/component.
const LazyHomeView = React.lazy(() =>
    import(
        '../views/HomeView'
        /* webpackChunkName: "HomeView" */
    )
);

const DefaultRoutes: React.FC = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <Switch>
                <Route path={'/'}>
                    <GratefulDeadProvider>
                        <LazyHomeView/>
                    </GratefulDeadProvider>
                </Route>
            </Switch>
        </React.Suspense>
    );
}

export default DefaultRoutes;
