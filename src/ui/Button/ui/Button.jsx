import classNames from 'classnames';
import cls from './Button.module.scss';

const Button = (props) => {
    const variantClasses = {
        clear: 'clear', normal: 'normal' 
    }
    const {children, className, variant, onClick, active, border} = props;
    const variantClass = variantClasses[variant] || variantClasses.normal;
    return (
        <button 
            className={classNames(`button ${className}`, cls[variantClass], {
                [cls.active] : active,
                [cls.border] : border
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
 
export {Button};