import * as React from 'react';
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from 'components/ErrorMessage';
import Header from 'components/layouts/Header';
import MainNavBar from 'components/layouts/MainNavBar';
import Footer from 'components/layouts/Footer';
import { MainNavBarLinks } from 'config/MainNavBarLinks';
import classNames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayoutProps {
    className?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = props => {
    const { className } = props;

    return (
        <ErrorBoundary fallback={<ErrorMessage errorMessageText={null} />}>
            <a
                href="#main-content"
                className={styles.skipNavigation}
            >
                Skip to main content
            </a>

            <Header>
                <MainNavBar links={MainNavBarLinks} />
            </Header>

            <main
                className={classNames(
                    styles.main,
                    {[`${className}`]: className}
                )}
                id={'main-content'}
            >
                <Outlet/>
            </main>

            <Footer/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
