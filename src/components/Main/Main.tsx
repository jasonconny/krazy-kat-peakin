import * as React from 'react';
import styles from './Main.scss';

interface IMainProps {
    siteName?: string;
}

const Main: React.FC<IMainProps> = props => {
    const { siteName } = props;

    return (
        <main className={styles.block}>
            <h2>{siteName ? siteName : 'Site name here'}</h2>
        </main>
    );
};

export default Main;
