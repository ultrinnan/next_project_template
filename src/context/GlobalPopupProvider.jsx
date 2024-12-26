
import React, { createContext, useState, useContext } from 'react';

const GlobalPopupContext = createContext();

export const GlobalPopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null);

    const showPopup = (content) => setPopup(content);
    const closePopup = () => setPopup(null);

    return (
        <GlobalPopupContext.Provider value={{ popup, showPopup, closePopup }}>
            {children}
            {popup && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px' }}>
                    <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                        {popup}
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </GlobalPopupContext.Provider>
    );
};

export const useGlobalPopup = () => useContext(GlobalPopupContext);
