import * as React from 'react';

interface IMainProps {
    title?: string;
}

const Main: React.FC<IMainProps> = props => {
    const { title } = props;

    return (
        <main>
            <h2>{title}</h2>
        </main>
    );
};

export default Main;
