import { createContext, useState } from "react";

export const LayoutContext = createContext({});

const LayoutContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(false);

    const handleClick = () => setIsOpen(prev => !prev);

    let timeout = null;
    const openPopup = () => {
        if(timeout !== null) {
            clearTimeout();
        }
        setPopup(true);

        timeout = setTimeout(() => {
            setPopup(false);
        }, 3000)
    }

    const value = {
        isOpen, handleClick, setIsOpen, openPopup, popup
    };

    return <LayoutContext.Provider value={value}>
        {children}
    </LayoutContext.Provider>
}

export {LayoutContextProvider};