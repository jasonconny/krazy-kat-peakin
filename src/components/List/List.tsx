import * as React from 'react';
import classNames from 'classnames';

interface IListProps {
    children: React.ReactElement;
    classname?: string;
    list: Array<any>;
}

const List: React.FC<IListProps> = props => {
    const {children, classname, list} = props;

    if (React.Children.only(children)) {
        return (
            <ul className={classNames({[`${classname}`]: classname})}>
                {list.filter(item => !!item)
                    .map((item, index) => (
                        <li key={index}>
                            {React.cloneElement(children, item)}
                        </li>
                    ))
                }
            </ul>
        )
    } else {
        return null;
    }
};

export default List;
