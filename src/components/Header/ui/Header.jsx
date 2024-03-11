import cls from './Header.module.scss';
import ToggleTheme from '@/assets/img/toggleTheme.svg';
import CartIcon from '@/assets/img/cart.svg';
import LogoPizza from '@/assets/img/logoPizza.svg'
import { Button } from '@/ui/Button';
import { Icon } from '@/ui/Icon';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const Header = () => {
    const navigate = useNavigate();
    const returnToMain = () => {
        navigate('/')
    }
    const {toggleTheme, theme} = useTheme();
    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <Icon Svg={LogoPizza} clickable onClick={returnToMain}/>
                        
                        <p>DeliVirginia</p>
                        <p>Location</p>
                    </div>

                    <div className={cls.buttons}>
                            <Icon Svg={ToggleTheme} clickable onClick={handleToggleTheme} />
                        <Button>
                            <CartIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export {Header};