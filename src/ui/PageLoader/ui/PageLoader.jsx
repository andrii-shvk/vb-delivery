import cls from './PageLoader.module.scss';

const PageLoader = () => {
    return (
        <div className={cls.pageLoader}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}
 
export {PageLoader};