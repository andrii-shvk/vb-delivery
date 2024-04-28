import cls from "@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss";
import { Skeleton } from "@/ui/Skeleton";
import { useMediaQuery } from 'react-responsive';

const ModalItemSkeleton = () => {
    const isMinMobile = useMediaQuery({ query: '(max-width: 599px)' })
    const isMedTablet = useMediaQuery({ query: '(max-width: 920px)' });
    const isBigTablet = useMediaQuery({ query: '(max-width: 1180px)' });

    return (
        <div className={cls.body}>
            {isMinMobile ? 
                <Skeleton width={240} height={240} className={cls.img} /> : ''
            || isMedTablet ? 
                <Skeleton width={250} height={250} className={cls.img} /> : 
                    <Skeleton width={isBigTablet ? 370 : 450} height={isBigTablet ? 370 : 450} className={cls.img} 
            />}
            <div className={cls.content}>
                <Skeleton width={250} height={25} className={cls.title} />

                <div className={cls.options}>
                    <div className={cls.block}>
                        <Skeleton width={100} height={35} />

                        <div className={cls.item}>
                            {isMinMobile ? <Skeleton width={125} height={45} /> :
                                <Skeleton width={isBigTablet ? 200 : 280} height={45} />
                            }
                        </div>
                    </div>

                    <div className={cls.block}>
                        <Skeleton width={100} height={35} />

                        <div className={cls.item}>
                        {isMinMobile ? <Skeleton width={125} height={45} /> :
                            <Skeleton width={isBigTablet ? 200 : 280} height={45} />
                        }
                        </div>
                    </div>
                </div>

                <div className={cls.footer}>
                    {isMinMobile ? <Skeleton width={110} height={35} /> :
                        <Skeleton width={125} height={30} />
                    }
                    {isMinMobile ? <Skeleton width={120} height={35} /> :
                        <Skeleton width={155} height={35} />
                    }
                </div>
            </div>
        </div>
    );
}
 
export {ModalItemSkeleton};