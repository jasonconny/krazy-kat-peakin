import * as React from 'react';
import Loading from '../../Loading';
import Header from '../Header';
import Footer from '../Footer';
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

            <Header/>

            <main
                className={classNames(
                    styles.main,
                    {[`${className}`]: className}
                )}
                id={'main-content'}
            >
                {children}
            </main>

            <Footer/>
        </>
    );
};

export default PrimaryLayout;
