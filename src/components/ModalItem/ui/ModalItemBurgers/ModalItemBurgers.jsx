import { productsName } from "@/const/const";
import { getProductItemBurgers } from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from './../ModalItem/ModalItem.module.scss';
import { Button } from "@/ui/Button";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { useModalItemParams } from "../../helper/useModalItemParams";


const ModalItemBurgers = (props) => {
    const {isOpen, product, price} = props;

    const newParams = useModalItemParams();

    const dispatch = useDispatch();
    const quantityBurgers = useSelector(getProductItemBurgers);

    useEffect(() => {
        if (isOpen) {
            dispatch(productActions.clearProduct());
            if (productsName.BURGERS === product.product) {
                dispatch(productActions.setQuantity(product.pieces[0]))
            }
        }
    }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (productsName.BURGERS === product.product && isOpen && quantityBurgers) {
            dispatch(productActions.setPrice(quantityBurgers.price));
        }
    }, [dispatch, isOpen, product, quantityBurgers]);

    const handleClickQuantity = (quantity) => {
        dispatch(productActions.setQuantity(quantity));
    }

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <p>mmm... Take a tasty!</p>

                <div className={cls.itemBurger}>
                    {product.ingredients.map(el => (
                        <span key={el} className={cls.ingredientsDesc}>
                            {el}
                        </span>
                    ))}

                </div>
            </div>
        </div>
    )

    return (
        <ModalItemLayout params={newParams} options={options} price={price}/>
    );
}

export {ModalItemBurgers};