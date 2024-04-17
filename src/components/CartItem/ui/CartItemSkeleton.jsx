import cls from './CartItem.module.scss';
import { Skeleton } from '@/ui/Skeleton';
import { useMediaQuery } from 'react-responsive';

const CartItemSkeleton = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 968px)' });
    const isBigTablet = useMediaQuery({ query: '(max-width: 1180px)' });

    return (
        <article className={cls.card}>
            <Skeleton className={cls.card} width={'100%'} height={300} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <Skeleton width={'100%'} height={isMobile ? 20 : 48 || isTablet ? 35 : 48} />
                    <Skeleton width={'100%'} height={isMobile ? 0 : 22} />
                </div>

                <div className={cls.footer} >
                    <Skeleton width={isBigTablet ? 180 : '100%'} height={isTablet ? 0 : 30} className={cls.skeletonPrice}/>
                    <Skeleton width={65} height={isTablet ? 0 : 22} /> 
                </div>
            </div>
        </article>
    );
}

export {CartItemSkeleton};