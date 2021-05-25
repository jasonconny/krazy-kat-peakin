import * as React from 'react';
import env from 'react-dotenv';
import ArtistProvider from './ArtistProvider';
import ReleasesProvider from './ReleasesProvider';

const KrazyKatProvider: React.FC<IProviderProps> = props => {
    const { artistId, children } = props;

    return (
        <ArtistProvider artistId={artistId}>
            <ReleasesProvider
                artistId={artistId}
                consumerKey={env.CONSUMER_KEY}
                consumerSecret={env.CONSUMER_SECRET}
            >
                {children}
            </ReleasesProvider>
        </ArtistProvider>
    )
};

export default KrazyKatProvider;
