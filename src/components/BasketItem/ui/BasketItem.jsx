import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useDispatch, useSelector } from "react-redux";
import cls from './BasketItem.module.scss';
import { productsName } from "@/const/const";
import { Button } from "@/ui/Button";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import basketImg from '@/assets/img/basket.png'


const BasketItem = () => {
    const basket = useSelector(getBasketItems);
    const dispatch = useDispatch();

    const uniqeKey = (product) => {
        switch (product.product) {
            case productsName.PIZZAS:
                return `${product.product} - ${product.id} - ${product.size} ${product.type} - ${product.price}`;
            case productsName.BURGERS:
                return `${product.product} - ${product.id} - ${product.price}`;
            case productsName.OTHERS:
                return `${product.product} - ${product.id} - ${product.price}`;
        }
    }

    const description = (product) => {
        switch (product.product) {
            case productsName.PIZZAS:
                return (
                    <span>
                        {product.type} dough, {product.size}
                    </span>
                )
            case productsName.BURGERS:
                return null;
            case productsName.OTHERS:
                return null;
            default:
                null;
        }
    }

    const item = basket.map(el => (
        <div key={uniqeKey(el)} className={cls.body}>
            <img className={cls.image} src={el.img} />

            <div className={cls.content}>
                <div className={cls.main}>
                    <p>{el.title}</p>

                    {description(el)}
                </div>

                <div className={cls.footer}>
                    <div className={cls.count}>
                        <Button 
                            onClick={() => dispatch(basketActions.minusItem(el))}
                            variant={'clear'} 
                            className={cls.button} 
                        >
                            -
                        </Button>
                        
                        <span>{el.count}</span>

                        <Button 
                            onClick={() => dispatch(basketActions.addItem(el))}
                            variant={'clear'} 
                            className={cls.button}
                        >
                            +
                        </Button>
                    </div>
                    {console.log(el.price)}
                    {console.log(el.count)}

                    <span>${el.price * el.count}</span>
                </div>
            </div>
        </div>
    ))

    return (
        <>
        <div className={cls.basketContent}>
            <h2>Your order</h2>
            {item}
        </div>
        
        {!basket.length && (
            <div className={cls.empty}>
                <h3>Your cart is empty...</h3>
                <img src={basketImg} />
            </div>
        )}
        </>
    )
}

export {BasketItem};






// import { getBasketError, getBasketItems, getBasketLoading, getBasketTotalPrice } from "@/redux/basket/selectors/basketSelectors";
// import { Button } from "@/ui/Button";
// import { useSelector } from "react-redux";
// import cls from './BasketItem.module.scss';


// const BasketItem = () => {
//     const items = useSelector(getBasketItems);
//     const error = useSelector(getBasketError);
//     const loading = useSelector(getBasketLoading);
//     // const totalPrice = useSelector(getBasketTotalPrice);

//     console.log(items);
//     // console.log(totalPrice);

//     const onClick = () => {}
//     return (
//         <div className={cls.header}>
//             <div className={cls.body}>
//                 <h1 className={cls.title}>Your order</h1>
                
//                 {items.map(el => (
//                     <div className={cls.content} key={el.id}>
//                         <img src={el.img} className={cls.img}/>
//                         <span>{el.title}</span>
//                         <span>{el.price}</span>
//                     </div>
//                 ))}

//                 {/* {totalPrice == 0 && <h2 className={cls.empty}>Your cart is empty!</h2>} */}
//             </div>

//             <div className={cls.footer}>
//                 <span className={cls.price}>Total price: $</span>

//                 <Button 
//                     border 
//                     variant={'clear'} 
//                     onClick={onClick} 
//                 >
//                     Continue To Checkout
//                 </Button>
//             </div>
//         </div>
//     );
// }
 
// export {BasketItem};

// {/* <div className={cls.body}>
// <img className={cls.img} src={params.img}/>

// <div className={cls.content}>
//     <h3 className={cls.title}>{params.title}</h3>

//     {options && options}

//     <div className={cls.footer}>
//         <span className={cls.price}>Total price: ${price}</span>

//         <Button border className={cls.button} onClick={onClick}>
//             Add Item
//         </Button>
//     </div>
// </div>
// </div> */}