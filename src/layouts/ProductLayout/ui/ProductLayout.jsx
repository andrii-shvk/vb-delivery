import { Link } from "react-router-dom";
import cls from './ProductLayout.module.scss';
import { CartItemSkeleton } from "@/components/CartItem";
import { Skeleton } from "@/ui/Skeleton";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvider";

export const ProductLayoutSkeleton = ({isMobile}) => {

    return (
        <>
            <div className={cls.link}>
                <Skeleton width={260} height={16} />
            </div>
            <section className={cls.productBody}>
                <h2 className={cls.title}>
                    <Skeleton width={isMobile ? 290 : 500} height={50} />
                </h2>

                <div className={cls.content}>
                    {
                        new Array(4).fill(0).map((_, i) => (
                            <CartItemSkeleton key={i} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

const ProductLayout = (props) => {
    const {header, item, loading} = props;
    const {setPage} = useContext(LayoutContext);

    return (
        <>
            {!loading && (
                <>
                    <Link className={cls.link} to={'/'} onClick={() => setPage(true)}>Back to the Main Page</Link>
                        <section className={cls.productBody}>
                            <h2 className={cls.title}>{header}</h2>

                            <div className={cls.content}>
                                {item}
                            </div>
                        </section>
                </>
            )}
        </>
    );
}
 
export {ProductLayout};