
import React from 'react';

const Button = ({ children, onClick, style }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                ...style,
            }}
        >
            {children}
        </button>
    );
};

export default Button;
