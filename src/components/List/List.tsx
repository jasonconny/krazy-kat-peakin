import * as React from 'react';
import classNames from 'classnames';

interface IListProps {
    children: React.ReactNode;
    className?: string;
}

const List: React.FC<IListProps> = props => {
    const {children, className} = props;

    return (
        <ul className={classNames({[`${className}`]: className})}>
            {children}
        </ul>
    );
};

export default List;
