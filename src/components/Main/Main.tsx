import * as React from 'react';
import styles from './Main.scss';

interface IMainProps {
    title?: string;
}

const Main: React.FC<IMainProps> = props => {
    const { title } = props;

    return (
        <main className={styles.block}>
            <h2>{title}</h2>
        </main>
    );
};

export default Main;
