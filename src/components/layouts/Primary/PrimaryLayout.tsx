import * as React from 'react';
import Loading from '../../Loading';
import classNames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayoutProps {
    children: React.ReactNode;
    loading?: boolean;
    className?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = props => {
    const { children, loading, className } = props;

    return loading ? (
        <Loading/>
    ) : (
        <>
            <a
                href="#main-content"
                className={styles.skipNavigation}
            >
                Skip to main content
            </a>

            <header>
                <h1>Header!</h1>
            </header>

            <main
                className={classNames(
                    styles.main,
                    {[`${className}`]: className}
                )}
                id={'main-content'}
            >
                {children}
            </main>

            <footer>
                <h3>Footer!</h3>
            </footer>
        </>
    );
};

export default PrimaryLayout;
