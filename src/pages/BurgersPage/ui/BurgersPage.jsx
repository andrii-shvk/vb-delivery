import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/providers/LayoutContextProvider";
import { getBurgers, getBurgersError, getBurgersLoading } from "@/redux/burgers/selectors/burgerSelectors";
import { fetchNextBurgersPage } from "@/redux/burgers/services/fetchNextBurgersPage";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';

const BurgersPage = () => {
    const burgers = useSelector(getBurgers);
    const loading = useSelector(getBurgersLoading);
    const error = useSelector(getBurgersError);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const {handleClick} = useContext(LayoutContext);

    const { ref, inView } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error) {
            dispatch(fetchNextBurgersPage());
        }
    }, [dispatch, error, inView])

    if (error) {
        return <div className='error'>{error}</div>
    }

    const item = burgers.map(el => {
        return <CartItem
            id={el.id}
            key={el.id}
            product={el.product}
            img={el.photo}
            title={el.name}
            ingredients={el.ingredients}
            price={el.pieces[0].price}
            handleClick={handleClick}
        />
    })

    return (
        <>
            <ProductLayout header={'Burgers'} item={item} loading={loading} />
            {loading && <ProductLayoutSkeleton isMobile={isMobile} />}
            {!loading && <div ref={ref} />}
        </>
    );
}
 
export default BurgersPage;