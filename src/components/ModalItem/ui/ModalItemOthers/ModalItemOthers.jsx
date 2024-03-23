import { productsName } from "@/const/const";
import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cls from './../ModalItem/ModalItem.module.scss';
import { Button } from "@/ui/Button";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";

const ModalItemOthers = (props) => {
    const {isOpen, product, price} = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.clearProduct());
    }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (productsName.OTHERS === product && isOpen) {
            dispatch(getProductItem);
        }
    }, [dispatch, isOpen, product]);

    // const options = (
    //     <div className={cls.options}>
    //         <div className={cls.block}>
    //             <p>Quantity of piceces</p>

    //             <div className={cls.item}>
    //                 {product.pieces.map((quantity, i) => {
    //                     return <Button>
    //                         {quantity.name}
    //                     </Button>
    //                 })}
    //             </div>
    //         </div>
    //     </div>
    // )

    const params = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
        // count: 1
    }

    return (
        <ModalItemLayout params={params} price={price} />
    );
}
 
export {ModalItemOthers};