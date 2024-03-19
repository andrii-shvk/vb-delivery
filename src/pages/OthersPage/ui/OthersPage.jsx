import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { getOthers, getOthersError, getOthersLoading } from "@/redux/others/selectors/othersSelectors";
import { fetchNextOthersPage } from "@/redux/others/service/fetchNextOthersPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const OthersPage = () => {
    const others = useSelector(getOthers);
    const loading = useSelector(getOthersLoading);
    const error = useSelector(getOthersError);
    console.log('others', others)

    const { ref, inView } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error) {
            dispatch(fetchNextOthersPage());
        }
    }, [dispatch, error, inView])

    if (error) {
        return <div>{error}</div>
    }

    const item = others.map(el => {
        return <CartItem 
            id={el.id}
            key={el.id}
            product={el.product}
            title={el.name}
            img={el.photo}
            price={el.price}
        />
    })
    console.log('refINVIEW', inView);
    console.log('item', item)
    return (
        <>
            <ProductLayout header={'Others'} item={item} />
            {!loading && <div ref={ref} />}
        </>
    );
}
 
export default OthersPage;