import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';

const HomeView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <section>
            <h2>{artist?.name}</h2>

            <h3>Profile</h3>

            <p>{artist?.profile}</p>
        </section>
    );
};

export default HomeView;
