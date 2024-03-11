import cls from './NavbarItems.module.scss'
import { Icon } from '@/ui/Icon';
import { AppLink } from '@/ui/AppLink/ui/AppLink';

const NavbarItems = ({item}) => {
    return (
        <AppLink to={item.path} className={cls.link} activeClassName={cls.active}>
            <Icon Svg={item.Icon} />

            <span className={cls.text}>{item.text}</span>
        </AppLink>
    );
}
 
export {NavbarItems};