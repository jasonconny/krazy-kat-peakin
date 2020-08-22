import * as React from 'react';
import styles from './Copyright.scss';

export const Copyright: React.FC = () => {
    return (
        <div className={styles.block}>
            <p>&copy; 2020 Krazy Kat Peakin', LLC. All rights reserved.</p>
        </div>
    );
};
