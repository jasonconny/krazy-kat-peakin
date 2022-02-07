import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MainNavBar.scss';


interface IMainNavBarProps {
    className?: string,
    links: Array<IMainNavBarLink>
}

const MainNavBar: React.FC<IMainNavBarProps> = props => {
    const { className, links } = props;

    const renderLinks = (links: Array<IMainNavBarLink>) => {
        return links.filter(link => !!link)
            .map((link, index) => {
                return (
                    <li
                        className={styles.listItem}
                        key={index}
                    >
                        <NavLink
                            to={link.path}
                            className={({ isActive}) => classNames(
                                styles.link,
                                {[styles.linkActive]: isActive}
                            )}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                )
            })
    };

    return (
        <nav className={classNames(
            styles.block,
            {[`${className}`]: className}
        )}>
            <ul className={styles.list}>
                {links.length > 0 && renderLinks(links)}
            </ul>
        </nav>
    )
};

export default MainNavBar;
