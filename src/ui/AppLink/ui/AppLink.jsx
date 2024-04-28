import classNames from "classnames";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const AppLink = memo((props) => {
    const {children, to, className = '', activeClassName = '', onClick} = props;
    return (
        <NavLink to={to} className={({isActive}) => {
            return classNames(className, {
                [activeClassName]: isActive
            })
        }}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
})
 
export {AppLink};