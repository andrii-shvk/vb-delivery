import { useSelector } from 'react-redux';
import { getProductItem, getProductItemLoading, getProductItemPrice } from '@/redux/productItem/selectors/productItemSelectors';
import { productsName } from '@/const/const';
import { ModalItemPizza } from '../ModalItemPizza/ModalItemPizza';
import { ModalItemBurgers } from '../ModalItemBurgers/ModalItemBurgers';
import { ModalItemOthers } from '../ModalItemOthers/ModalItemOthers';
import { Modal } from '@/ui/Modal/ui/Modal';
import { ModalItemSkeleton } from '../ModalItemSkeleton/ModalItemSkeleton';
import { useMediaQuery } from 'react-responsive';

const ModalItem = (props) => {
    const {isOpen, setIsOpen} = props;
    const product = useSelector(getProductItem);
    const loading =  useSelector(getProductItemLoading);
    const price = useSelector(getProductItemPrice);

    const isMinMobile = useMediaQuery({ query: '(min-width: 320px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 599px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 799px)' });
    const isMedTablet = useMediaQuery({ query: '(min-width: 920px)' });
    const isBigTablet = useMediaQuery({ query: '(min-width: 968px)' });
    const isMinDesktop = useMediaQuery({ query: '(min-width: 1080px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });

    const sizeModalMenu = () => {
        if (isDesktop) return 1070;
            else if (isMinDesktop) return 960;
            else if (isBigTablet) return 850;
            else if (isMedTablet) return 820;
            else if (isTablet) return 700;
            else if (isMobile) return 480;
            else if (isMinMobile) return 290;
    }
    const heightModalMenu = () => {
        if (isDesktop) return 640;
            else if (isMinDesktop) return 580;
            else if (isMedTablet) return 550;
            else if (isTablet) return 530;
            else if (isMobile) return 500;
            else if (isMinMobile) return 600;
    }

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

    if (loading) {
        return (
            <Modal
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                width={sizeModalMenu()}
                height={heightModalMenu()}
                border={25}
            >
                <ModalItemSkeleton />
            </Modal>
        )
    }

    return (
        <Modal 
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            width={sizeModalMenu()}
            height={heightModalMenu()}
            border={25}
        >
            {productOptions()}
        </Modal>
    );
}
 
export {ModalItem};