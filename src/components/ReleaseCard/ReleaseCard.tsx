import * as React from 'react';
import styles from './ReleaseCard.scss';

const ReleaseCard: React.FC<IRelease> = (props: IRelease) => {
    const { title } = props;
    return (
        <div className={styles.block}>
            {title}
        </div>
    )
};

export default ReleaseCard;
