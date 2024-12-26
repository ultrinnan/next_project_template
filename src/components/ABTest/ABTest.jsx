
import React, { useEffect, useState } from 'react';

const ABTest = ({ children }) => {
    const [variant, setVariant] = useState(null);

    useEffect(() => {
        // Determine variant only on the client side
        setVariant(Math.random() < 0.5 ? 'A' : 'B');
    }, []);

    if (!variant) {
        return null; // Render nothing until the variant is determined
    }

    return (
        <>
            {React.Children.map(children, (child) =>
                child.props.name === variant ? child : null
            )}
        </>
    );
};

export const Variant = ({ children }) => children;

export default ABTest;
