import { productsName } from "@/const/const";
import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cls from './../ModalItem/ModalItem.module.scss';
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useModalItemParams } from "../../helper/useModalItemParams";

const ModalItemOthers = (props) => {
    const {isOpen, product} = props;

    const params = useModalItemParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.clearProduct());
    }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (productsName.OTHERS === product && isOpen) {
            dispatch(getProductItem);
        }
    }, [dispatch, isOpen, product]);

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <span className={cls.drinksDesc}>
                    <p>Thirsty?...</p>
                    Take more of our drinks!
                </span>

            </div>
        </div>
    )

    return (
        <ModalItemLayout options={options} params={params} price={product.price} />
    );
}
 
export {ModalItemOthers};