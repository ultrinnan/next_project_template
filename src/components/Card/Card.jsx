
import React from 'react';

const Card = ({ title, children }) => {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '15px',
                marginBottom: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
            <div>{children}</div>
        </div>
    );
};

export default Card;
