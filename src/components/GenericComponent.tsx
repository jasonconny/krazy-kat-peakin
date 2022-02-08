import * as React from 'react';

interface IGenericComponentProps {
    className?: string;
    excited: boolean;
    fooProp?: string;
}

const GenericComponent: React.FC<IGenericComponentProps> = ({
    className,
    excited,
    fooProp
}) => {
    const message = fooProp ? fooProp : 'I am TypeScript';
    return (
        <div className={className ? className : undefined}>
            <h3>{message}{excited ? '!' : null}</h3>
        </div>
    );
}

export default GenericComponent;
