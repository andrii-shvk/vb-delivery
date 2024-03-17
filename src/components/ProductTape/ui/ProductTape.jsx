import cls from "./ProductTape.module.scss";
import { CartItem } from "@/components/CartItem";
import { productsName } from "@/const/const";

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
            product: el.product
        }

        switch(el.product) {
            case productsName.PIZZAS:
                return (
                    <CartItem {...props} ingredients={el.ingredients}/>
            )
            case productsName.BURGERS:
                return (
                    <CartItem {...props} ingredients={el.ingredients}/>
            )
            case productsName.OTHERS:
                return (
                    <CartItem {...props}/>
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