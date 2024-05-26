import cls from './Header.module.scss';
import ToggleTheme from '@/assets/img/toggleTheme.svg';
import CartIcon from '@/assets/img/cart.svg';
import LogoPizza from '@/assets/img/logoPizza.svg'
import { Button } from '@/ui/Button';
import { Icon } from '@/ui/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { Modal } from '@/ui/Modal/ui/Modal';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { BasketItem } from '@/components/BasketItem';
import { useSelector } from 'react-redux';
import { getBasketTotalPrice } from '@/redux/basket/selectors/basketSelectors';
import { LayoutContext } from '@/providers/LayoutContextProvider';
import { Squash as Hamburger } from 'hamburger-react'
import { ScrollToTop } from '@/ui/ScrollToTop';
import { useNavbarItemsList } from '@/utils/useNavbarItemsList';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

const Header = memo(() => {
    const navigate = useNavigate();
    const {popup, isOpen} = useContext(LayoutContext);
    const totalPrice = useSelector(getBasketTotalPrice);
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleClick = () => {
        setIsOpenModal(prev => !prev)
    }

    const {toggleTheme} = useTheme();
    const handleToggleTheme = () => {
        toggleTheme();
    }

    const {page, setPage} = useContext(LayoutContext);
    const returnToMain = () => {
        navigate('/');
        setPage(true);
    }
    useEffect(() => {
        localStorage.setItem('location', page)
    }, [page])

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // stop-scroll
	if (isOpenModal) {
		document.body.classList.add('lock')
	} else {
		document.body.classList.remove('lock')
	}
    const links = useMemo(() => useNavbarItemsList().map(el => {
        return (
            <Link key={el.path} to={el.path} onClick={() => setIsMenuOpen(false)}>
                {el.text}
            </Link>
        )
    }), [])

    return (
        <>
            <header className={cls.header}>
                <div className={cls.container}>
                    <div className={cls.content}>
                        <div className={cls.logo}>
                            <Icon Svg={LogoPizza} clickable onClick={returnToMain} />
                            <p>DeliVirginia</p>
                        </div>
                        
                            <Link to='#contactInfo' className={page === true ? cls.location : cls.offLocation}>
                                <strong>Location:</strong> 1135 North Yarbrough Drive
                            </Link>
                            
                        <div className={cls.buttons}>
                                <Icon Svg={ToggleTheme} clickable onClick={handleToggleTheme} />

                            <Button onClick={handleClick} className={cls.button}>
                                <CartIcon />
                                <span>${totalPrice}</span>
                            </Button>
                        </div>
                    </div>

                    <div className={cls.mobileContent}>
                        <div className={cls.buttons}>
                            <Icon Svg={ToggleTheme} clickable onClick={handleToggleTheme} />

                            <Button onClick={handleClick} className={cls.button}>
                                <CartIcon />
                                <span>${totalPrice}</span>
                            </Button>

                        <div className={classNames(cls.menuHamburger, isOpen || isOpenModal ? 'none' : '')}>
                            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={30}/>
                        </div>

                        </div>
                    </div>
                    {popup && <p className={cls.popup}>The product was added to the cart!</p>}
                </div>
            </header>
            
            <ScrollToTop />
            <Modal
                variant={'headerMenu'}
                width={'100%'}
                scroll={'auto'}
                height={'100%'}
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
            >
                <div className={cls.menuContent}>
                    <div className={cls.menuLinks}>
                        <h1>Our products :</h1>
                        {links}
                        <Link to='/' onClick={() => setIsMenuOpen(false)}>Back to the main page</Link>
                    </div>
                    <div className={cls.contacts}>
                        <div className={cls.locationMenu}>
                            <p>Location:</p>
                            <Link to='#contactInfo' onClick={() => setIsMenuOpen(false)}>
                                1135 North Yarbrough Drive
                            </Link>
                        </div>
                        <div className={cls.phone}>
                            <p>Phone :</p>
                            <Link to="tel:+17579999999"  onClick={() => setIsMenuOpen(false)}>+1 (757) 999-99-99</Link>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal 
                variant={'rightModal'}
                width={isTablet ? '100%' : 420}
                scroll={'auto'}
                height={'100%'} 
                isOpen={isOpenModal}
                setIsOpen={setIsOpenModal}
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
})
 
export {Header};