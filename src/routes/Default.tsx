import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';

// ATTENTION!!
// The webpackChunkName comment is important. webpack uses this to magically create chunked code bundles.
// The value *must* be unique and ideally match the corresponding const/component.
const LazyHomeView = React.lazy(() =>
    import(
        'views/HomeView'
        /* webpackChunkName: "HomeView" */
    )
);

const LazyMembersView = React.lazy(() =>
    import(
        'views/MembersView'
        /* webpackChunkName: "MembersView" */
    )
);

const LazyNotFoundView = React.lazy(() =>
    import(
        'views/NotFoundView'
        /* webpackChunkName: "NotFoundView" */
    )
);

const DefaultRoutes: React.FC = () => {
    return (
        <ErrorBoundary fallback={<ErrorMessage errorMessageText={null} />}>
            <React.Suspense fallback={<Loading/>}>
                <Switch>
                    <Redirect exact path={'/'} to={'/home'}/>

                    <Route path={'/home'}>
                        <LazyHomeView />
                    </Route>

                    <Route path={'/members'}>
                        <LazyMembersView />
                    </Route>

                    <Route path={'*'}>
                        <LazyNotFoundView />
                    </Route>
                </Switch>
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default DefaultRoutes;
