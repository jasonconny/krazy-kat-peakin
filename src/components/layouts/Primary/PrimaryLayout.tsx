import * as React from 'react';

interface IPrimaryLayout {
    children: React.ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = props => {
    const { children } = props;
    return (
        <main>
            {children}
        </main>
    );
};

export default PrimaryLayout;
