import cls from "./ProductTape.module.scss";
import { CartItem } from "@/components/CartItem";
import { productsName } from "@/const/const";
import { calcMinPricePizza } from "@/utils/calcMinPrice";

const ProductTape = (props) => {
    const {title, products = [], isLoading = false, error = undefined} = props;

    if (isLoading) {
        return <div>Loading...</div>
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
                const minPriceBurgers = el.pieces.map(el => el.price);
                return (
                    <CartItem {...props} ingredients={el.ingredients} price={minPriceBurgers} />
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