import cls from './NavbarItems.module.scss'
import { Icon } from '@/ui/Icon';
import { AppLink } from '@/ui/AppLink/ui/AppLink';
import { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '@/providers/LayoutContextProvider';

const NavbarItems = ({item}) => {
    const {page, setPage} = useContext(LayoutContext);

    useEffect(() => {
        localStorage.setItem('location', page)
    }, [page])
    return (
        <AppLink to={item.path} className={cls.link} activeClassName={cls.active} onClick={() => setPage(false)}>
            <Icon Svg={item.Icon}/>

            <span className={cls.text}>{item.text}</span>
        </AppLink>
    );
}
 
export {NavbarItems};