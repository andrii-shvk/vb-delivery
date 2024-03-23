import { productsName } from "@/const/const";
import { getProductItemBurgers } from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from './../ModalItem/ModalItem.module.scss';
import { Button } from "@/ui/Button";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";


const ModalItemBurgers = (props) => {
    const {isOpen, product, price} = props;

    const dispatch = useDispatch();
    const quantityBurgers = useSelector(getProductItemBurgers);

    useEffect(() => {
        if (isOpen) {
            dispatch(productActions.clearProduct());
            if (productsName.BURGERS === product.product) {
                dispatch(productActions.setQuantity(product.pieces[0]))
            }
        }
    }, [dispatch, isOpen, product])

    useEffect(() => {
        if (productsName.BURGERS === product.product && isOpen && quantityBurgers) {
            dispatch(productActions.setPrice(quantityBurgers.price))
        }
    }, [dispatch, isOpen, product, quantityBurgers]);

    const handleClickQuantity = (quantity) => {
        dispatch(productActions.setQuantity(quantity));
    }

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <p>Quantity of pieces</p>

                <div className={cls.item}>
                    {product.pieces.map((quantity, i) => {
                        return <Button
                            border
                            variant={'clear'}
                            key={i}
                            active={quantityBurgers === quantity}
                            onClick={() => {handleClickQuantity(quantity)}}
                        >
                            {quantity.name}
                        </Button>
                    })}
                </div>

            </div>

        </div>
    )

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
        price: price
    }

    return (
        <ModalItemLayout params={newParams} options={options} />
    );
}
 
export {ModalItemBurgers};