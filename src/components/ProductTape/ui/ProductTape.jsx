import cls from "./ProductTape.module.scss";
import { CartItem, CartItemSkeleton } from "@/components/CartItem";
import { productsName } from "@/const/const";
import { Skeleton } from "@/ui/Skeleton";
import { calcMinPricePizza } from "@/utils/calcMinPrice";

export const getSkeleton = () => {
    return (
        <section className={cls.products}>
            <h2 className={cls.title}>
                <Skeleton width={500} height={50} />
            </h2>

            <div className={cls.card}>
                {
                    new Array(4).fill(0).map((_, i) => (
                        <CartItemSkeleton key={i} />
                    ))
                }
            </div>
        </section>
    )
}

const ProductTape = (props) => {
    const {title, products = [], isLoading = false, error = undefined} = props;

    if (isLoading) {
        return getSkeleton();
    }
    const items = products.map(el => {
        const props = {
            id: el.id,
            img: el.photo,
            title: el.name,
            key: el.id,
            product: el.product,
        }

        switch(el.product) {
            case productsName.PIZZAS:
                const minPricePizza = calcMinPricePizza(el.sizes, el.doughs)
                return (
                    <CartItem {...props} ingredients={el.ingredients} price={minPricePizza}/>
            )
            case productsName.BURGERS:
                return (
                    <CartItem {...props} ingredients={el.ingredients} price={el.price} />
            )
            case productsName.OTHERS:
                return (
                    <CartItem {...props} price={el.price}/>
            )
            default:
                null
        }
    })

    return (
        <section className={cls.products}>
            <h2 className={cls.title}>{title}</h2>

            {error && (
                <div className='error'>
                    Oops... This page couldn't get a list of products. Check back later!
                </div>
            )}
            <div className={cls.card}>
                {items}
            </div>
        </section>
    );
}
 
export {ProductTape};