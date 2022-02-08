import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import List from 'components/List';
import ArtistCard from 'components/ArtistCard';

const MembersView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <section>
            <h2>{artist?.name}</h2>

            <h3>Members</h3>

            {artist && artist.members.length > 0 ? (
                <List>
                    {artist.members
                        .filter(member => !!member)
                        .map((member) => (
                            <li key={member.id}>
                                <ArtistCard
                                    active={member.active}
                                    id={member.id}
                                    name={member.name}
                                />
                            </li>
                        ))
                    }
                </List>
            ) : null}
        </section>
    );
};

export default MembersView;
