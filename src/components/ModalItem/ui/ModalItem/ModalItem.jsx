import { useSelector } from 'react-redux';
import cls from './ModalItem.module.scss';
import { getProductItem, getProductItemLoading, getProductItemPrice } from '@/redux/productItem/selectors/productItemSelectors';
import { productsName } from '@/const/const';
import { ModalItemPizza } from '../ModalItemPizza/ModalItemPizza';
import { ModalItemBurgers } from '../ModalItemBurgers/ModalItemBurgers';
import { ModalItemOthers } from '../ModalItemOthers/ModalItemOthers';
import { Modal } from '@/ui/Modal/ui/Modal';

const ModalItem = (props) => {
    const {isOpen, setIsOpen} = props;

    const product = useSelector(getProductItem);
    const loading =  useSelector(getProductItemLoading);
    const price = useSelector(getProductItemPrice);

    const productOptions = () => {
        const props = {
            isOpen: isOpen,
            product: product,
            price: price
        }

        switch (product.product) {
            case productsName.PIZZAS:
                return <ModalItemPizza {...props} />
            case productsName.BURGERS:
                return <ModalItemBurgers {...props} />
            case productsName.OTHERS:
                return <ModalItemOthers {...props} />   
            default:
                null 
        }
    }

    return (
        <Modal 
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            width={700}
            height={680}
            border={25}
        >
            {productOptions()}
        </Modal>
    );
}
 
export {ModalItem};