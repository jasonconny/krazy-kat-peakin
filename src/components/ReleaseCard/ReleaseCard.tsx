import * as React from 'react';
import styles from './ReleaseCard.scss';

const ReleaseCard: React.FC<IRelease | IReleaseMaster> = (props: IRelease | IReleaseMaster) => {
    const { title } = props;
    return (
        <div className={styles.block}>
            <h4>{title}</h4>
        </div>
    )
};

export default ReleaseCard;
