import cls from './Skeleton.module.scss';
import classNames from 'classnames';

const Skeleton = (props) => {
    const {className, width, height, border} = props;
    const style = {
        width,
        height,
        borderRadius: border
    }
    return (
        <div className={classNames(cls.skeleton, className)} style={style}></div>
    );
}
 
export {Skeleton};