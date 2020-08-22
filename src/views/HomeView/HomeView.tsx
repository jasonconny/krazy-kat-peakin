import * as React from 'react';
import { ArtistContext } from '../../providers/ArtistProvider';
import { PrimaryLayout } from '../../components/layouts';

const HomeView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <PrimaryLayout>
            <section>
                <h2>{artist?.name}</h2>

                <ul>
                    {artist && artist.members.length > 0 ? (
                        artist.members
                            .filter(member => !!member)
                            .map((member, index) => (
                                <li key={index}>{member.name}</li>
                            ))
                    ) : null}
                </ul>
            </section>
        </PrimaryLayout>
    );
};

export default HomeView;
