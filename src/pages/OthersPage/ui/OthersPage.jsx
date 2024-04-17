import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/providers/LayoutContextProvider";
import { getOthers, getOthersError, getOthersLoading } from "@/redux/others/selectors/othersSelectors";
import { fetchNextOthersPage } from "@/redux/others/service/fetchNextOthersPage";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';

const OthersPage = () => {
    const others = useSelector(getOthers);
    const loading = useSelector(getOthersLoading);
    const error = useSelector(getOthersError);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    const {handleClick} = useContext(LayoutContext);

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
        return <div className='error'>{error}</div>
    }

    const item = others.map(el => {
        return <CartItem 
            id={el.id}
            key={el.id}
            product={el.product}
            title={el.name}
            img={el.photo}
            price={el.price}
            description={el.description}
            handleClick={handleClick}
        />
    })
    return (
        <>
            <ProductLayout header={'Others'} item={item} loading={loading} />
            {loading && <ProductLayoutSkeleton isMobile={isMobile} />}
            {!loading && <div ref={ref} />}
        </>
    );
}
 
export default OthersPage;