import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import { ReleasesContext } from 'providers/ReleasesProvider';
import { PrimaryLayout } from 'components/layouts';
import List from 'components/List';

const ReleasesView: React.FC = () => {
    const artist = React.useContext(ArtistContext);
    const releases = React.useContext(ReleasesContext);

    return (
        <PrimaryLayout>
            <section>
                <h2>{artist?.name}</h2>

                <h3>Releases</h3>

                {releases && releases.releases.length > 0 ? (
                    <List>
                        {releases.releases
                            .filter(release => !!release)
                            .map(release => (
                                <li key={release.id}>
                                    {release.title}
                                </li>
                            ))
                        }
                    </List>
                ) : null}
            </section>
        </PrimaryLayout>
    );
};

export default ReleasesView;
