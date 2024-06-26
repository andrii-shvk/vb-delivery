import { Outlet } from 'react-router-dom';
import cls from './MainLayout.module.scss';
import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ModalItem } from '@/components/ModalItem';
import { memo, useContext, useState } from 'react';
import { LayoutContext } from '@/providers/LayoutContextProvider';
import { ScrollToAnchor } from '@/ui/ScrollToAnchor';

const MainLayout = memo(() => {
    const {theme} = useTheme();
    const {isOpen, setIsOpen} = useContext(LayoutContext);

    return (
        <div id='app' className={`app ${theme}`}>
            <Header />
            <ScrollToAnchor />


            <main className={cls.main}>
                <div className={cls.container}>
                    <div className={cls.body}>
                        <Navbar />

                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
            <ModalItem isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
})

export {MainLayout};