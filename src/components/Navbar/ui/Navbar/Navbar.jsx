import { useNavbarItemsList } from '@/utils/useNavbarItemsList';
import cls from './Navbar.module.scss';
import { NavbarItems } from '../NavbarItems/NavbarItems';
import { memo, useMemo } from 'react';

const Navbar = memo(() => {
    const navbarItemsList = useNavbarItemsList();
    const itemsList = useMemo(() => {
        return navbarItemsList.map(item => (
            <NavbarItems item={item} key={item.path} />
        ))
    }, [navbarItemsList])

    return (
        <nav className={cls.navbar}>
            {itemsList}
        </nav>
    );
})
 
export {Navbar};