import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import { PrimaryLayout } from 'components/layouts';

const ReleasesView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <PrimaryLayout>
            <section>
                <h2>{artist?.name}</h2>

                <h3>Releases</h3>
            </section>
        </PrimaryLayout>
    );
};

export default ReleasesView;
