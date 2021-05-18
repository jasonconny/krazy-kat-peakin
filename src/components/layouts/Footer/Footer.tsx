import * as React from 'react';
import Copyright from 'components/layouts/Copyright';
import styles from './Footer.scss';

interface IFooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = props => {
    const { children } = props;

    return (
        <footer className={styles.block}>
            {children}

            <Copyright/>
        </footer>
    )
};

export default Footer;
