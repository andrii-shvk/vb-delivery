import cls from './Header.module.scss';
import ToggleTheme from '@/assets/img/toggleTheme.svg';
import CartIcon from '@/assets/img/cart.svg';
import LogoPizza from '@/assets/img/logoPizza.svg'
import { Button } from '@/ui/Button';
import { Icon } from '@/ui/Icon';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { Modal } from '@/ui/Modal/ui/Modal';
import { useContext, useState } from 'react';
import { BasketItem } from '@/components/BasketItem';
import { useSelector } from 'react-redux';
import { getBasketTotalPrice } from '@/redux/basket/selectors/basketSelectors';
import { LayoutContext } from '@/providers/LayoutContextProvider';


const Header = () => {
    const navigate = useNavigate();
    const {popup} = useContext(LayoutContext);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const returnToMain = () => {
        navigate('/')
    }
    const {toggleTheme} = useTheme();
    const handleToggleTheme = () => {
        toggleTheme();
    }

    const totalPrice = useSelector(getBasketTotalPrice);

    return (
        <>
            <header className={cls.header}>
                <div className={cls.container}>
                    <div className={cls.content}>
                        <div className={cls.logo}>
                            <Icon Svg={LogoPizza} clickable onClick={returnToMain}/>
                            
                            <p>DeliVirginia</p>
                            <p>Location</p>
                        </div>

                        <div className={cls.buttons}>

                                <Icon Svg={ToggleTheme} clickable onClick={handleToggleTheme} />

                            <Button onClick={handleClick} className={cls.button}>
                                <CartIcon />
                                <span>${totalPrice}</span>
                            </Button>
                        </div>
                    </div>

                    {popup && <p className={cls.popup}>The product was added to the cart!</p>}
                </div>
            </header>

            <Modal 
                variant={'rightModal'}
                width={420} 
                scroll={'auto'}
                height={'100%'} 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <div className={cls.body}>
                    <BasketItem />

                    <div className={cls.footer}>
                        
                        <div className={cls.totalPrice}>
                            <span>Total: ${totalPrice}</span>
                        </div>

                        <Button>
                            Continue to checkout
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
 
export {Header};