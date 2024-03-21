import cls from './CartItem.module.scss';
import { Skeleton } from '@/ui/Skeleton';

const CartItemSkeleton = () => {
    return (
        <article className={cls.card}>
            <Skeleton className={cls.card} width={'100%'} height={300} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <Skeleton width={'100%'} height={48} />
                    <Skeleton width={'100%'} height={22} />
                </div>

                <div className={cls.footer} >
                    <Skeleton width={'100%'} height={50} className={cls.skeletonPrice}/>
                    <Skeleton width={65} height={22} /> 
                </div>
            </div>
        </article>
    );
}

export {CartItemSkeleton};