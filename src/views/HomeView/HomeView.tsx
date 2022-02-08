import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import GenericComponent from 'components/GenericComponent'

const HomeView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <section>
            <h2>{artist?.name}</h2>

            <h3>Profile</h3>

            <p>{artist?.profile}</p>

            <GenericComponent excited={true} fooProp={'Aloha Mr. Hand'} />
        </section>
    );
};

export default HomeView;
