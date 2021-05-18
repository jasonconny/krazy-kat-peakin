import * as React from 'react';
import classNames from 'classnames';
import styles from './ArtistCard.scss';

const ArtistCard: React.FC<Member> = (props: Member) => {
    const { active, name } = props;

    return (
        <div
            className={classNames(
                styles.block,
                {[styles.blockActive]: active},
                {[styles.blockInactive]: !active}
            )}
        >
            <span>{name}</span>
        </div>
    );
};

export default ArtistCard;
