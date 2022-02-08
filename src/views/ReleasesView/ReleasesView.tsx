import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import { ReleasesContext } from 'providers/ReleasesProvider';
import List from 'components/List';
import ReleaseCard from 'components/ReleaseCard';
import styles from './ReleasesView.scss';

const ReleasesView: React.FC = () => {
    const artist = React.useContext(ArtistContext);
    const releases = React.useContext(ReleasesContext);

    return (
        <section>
            <h2>{artist?.name}</h2>

            <h3>Releases</h3>

            {releases && releases.releases.length > 0 ? (
                <List className={styles.list}>
                    {releases.releases
                        .filter(release => !!release && release.type === 'master')
                        .map(release => (
                            <li className={styles.listItem} key={release.id}>
                                <ReleaseCard {...release} />
                            </li>
                        ))
                    }
                </List>
            ) : null}
        </section>
    );
};

export default ReleasesView;
