import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { getBurgers, getBurgersError, getBurgersLoading } from "@/redux/burgers/selectors/burgerSelectors";
import { fetchNextBurgersPage } from "@/redux/burgers/services/fetchNextBurgersPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";


const BurgersPage = () => {
    const burgers = useSelector(getBurgers);
    const loading = useSelector(getBurgersLoading);
    const error = useSelector(getBurgersError);

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
        />
    })

    return (
        <>
            <ProductLayout header={'Burgers'} item={item} />
            {loading && <ProductLayoutSkeleton />}
            {!loading && <div ref={ref} />}
        </>
    );
}
 
export default BurgersPage;