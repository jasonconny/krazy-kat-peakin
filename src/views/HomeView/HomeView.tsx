import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import { PrimaryLayout } from 'components/layouts';

const HomeView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <PrimaryLayout>
            <section>
                <h2>{artist?.name}</h2>

                <h3>Profile</h3>

                <p>{artist?.profile}</p>
            </section>
        </PrimaryLayout>
    );
};

export default HomeView;
