import { Icon } from '@/ui/Icon';
import cls from './Footer.module.scss';
import LogoPizza from '@/assets/img/logoPizza.svg'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>

                <div className={cls.content}>
                    <div className={cls.logo}>
                        <Icon Svg={LogoPizza} />
                        <p>DeliVirginia</p>
                    </div>
                        <p>© Copyright 2024 - DeliVirginia</p>
                </div>
                
            </div>
        </footer>
    );
}
 
export {Footer};