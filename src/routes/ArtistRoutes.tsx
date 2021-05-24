import * as React from 'react';
import { Route, Switch } from 'react-router';
import ArtistProvider from 'providers/ArtistProvider';

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
        /* webpackChunkName: "ReleasesView" */
    )
);

const ArtistRoutes: React.FC = () => (
    <ArtistProvider artistId={246650}>
        <Switch>
            <Route path={'/home'}>
                <LazyHomeView />
            </Route>

            <Route path={'/members'}>
                <LazyMembersView />
            </Route>
        </Switch>
    </ArtistProvider>
);

export default ArtistRoutes;
