import PizzaProduct from '@/assets/img/pizzaProduct.svg';
import BurgersProduct from '@/assets/img/rollProduct.svg';
import OtherProduct from '@/assets/img/otherProduct.svg';

const useNavbarItemsList = () => {
    const navbarItemsList = [
        {
            path: '/pizzas',
            Icon: PizzaProduct,
            text: 'Pizza'
        },
        {
            path: '/burgers',
            Icon: BurgersProduct,
            text: 'Burgers'
        },
        {
            path: '/others',
            Icon: OtherProduct,
            text: 'Others'
        },
    ]
    return navbarItemsList;
}

export {useNavbarItemsList};