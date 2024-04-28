import { createContext, memo, useState } from "react";

export const LayoutContext = createContext({});

const LayoutContextProvider = memo(({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('location') || true));

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
        isOpen, handleClick, setIsOpen, openPopup, popup, page, setPage
    };

    return <LayoutContext.Provider value={value}>
        {children}
    </LayoutContext.Provider>
})

export {LayoutContextProvider};