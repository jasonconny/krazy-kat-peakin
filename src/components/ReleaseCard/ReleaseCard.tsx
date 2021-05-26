import * as React from 'react';
import styles from './ReleaseCard.scss';

const ReleaseCard: React.FC<IRelease | IReleaseMaster> = (props: IRelease | IReleaseMaster) => {
    const { thumb, title, year } = props;
    return (
        <div className={styles.block}>
            <img
                alt={title}
                className={styles.image}
                src={thumb}
            />

            <h4 className={styles.header}>{title}</h4>

            <p>{year}</p>
        </div>
    )
};

export default ReleaseCard;
