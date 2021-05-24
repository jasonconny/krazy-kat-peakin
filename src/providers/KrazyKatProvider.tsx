import * as React from 'react';
import ArtistProvider from './ArtistProvider';
import ReleasesProvider from './ReleasesProvider';

const KrazyKatProvider: React.FC<IProviderProps> = props => {
    const { artistId, children } = props;

    return (
        <ArtistProvider artistId={artistId}>
            <ReleasesProvider artistId={artistId}>
                {children}
            </ReleasesProvider>
        </ArtistProvider>
    )
};

export default KrazyKatProvider;
