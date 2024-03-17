import { useDispatch, useSelector } from 'react-redux';
import cls from './PizzasPage.module.scss';
import { useEffect } from 'react';
import { fetchPizza } from '@/redux/pizzas/services/fetchPizza';
import { getPizza, getPizzaError, getPizzaLoading } from '@/redux/pizzas/selectors/pizzaSelectors';
import { ProductLayout } from '@/layouts/ProductLayout';
import { calcMinPricePizza } from '@/utils/calcMinPrice';
import { CartItem } from '@/components/CartItem';

const PizzasPage = () => {
    const pizza = useSelector(getPizza);
    // const loading = useSelector(getPizzaLoading);
    const error = useSelector(getPizzaError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPizza())
    }, [dispatch]);

    if (error) {
        return <div>{error}</div>
    }

    const item = pizza.map(el => {
        const minPrice = calcMinPricePizza(el.sizes, el.doughs);
        return <CartItem 
            id={el.id}
            key={el.id}
            product={el.product}
            img={el.photo}
            title={el.name}
            ingredients={el.ingredients}
            price={minPrice}
        />
    })

    return (
        <ProductLayout header={'Pizza'} item={item} />
    );
}
 
export default PizzasPage;