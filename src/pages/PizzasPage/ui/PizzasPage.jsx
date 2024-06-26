import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { getPizza, getPizzaError, getPizzaLoading } from '@/redux/pizzas/selectors/pizzaSelectors';
import { ProductLayout } from '@/layouts/ProductLayout';
import { calcMinPricePizza } from '@/utils/calcMinPrice';
import { CartItem } from '@/components/CartItem';
import { fetchNextPizzaPage } from '@/redux/pizzas/services/fetchNextPizzaPage';
import { useInView } from 'react-intersection-observer';
import { ProductLayoutSkeleton } from '@/layouts/ProductLayout/ui/ProductLayout';
import { LayoutContext } from '@/providers/LayoutContextProvider';
import { useMediaQuery } from 'react-responsive';

const PizzasPage = () => {
    const pizza = useSelector(getPizza);
    const loading = useSelector(getPizzaLoading);
    const error = useSelector(getPizzaError);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const {handleClick} = useContext(LayoutContext);

    const { ref, inView } = useInView({
        threshold: 1,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error) {
            dispatch(fetchNextPizzaPage())
        }
    }, [dispatch, error, inView]);

    if (error) {
        return <div className='error'>{error}</div>
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
                    handleClick={handleClick}
        />
    })

    return (
        <>
            <ProductLayout header={'Pizza'} item={item} loading={loading} />
            {loading && <ProductLayoutSkeleton isMobile={isMobile} />}
            {!loading && <div ref={ref} />}
        </>
    );
}
 
export default PizzasPage;