import classNames from "classnames";
import { NavLink } from "react-router-dom";

const AppLink = (props) => {
    const {children, to, className = '', activeClassName = ''} = props;
    return (
        <NavLink to={to} className={({isActive}) => {
            return classNames(className, {
                [activeClassName]: isActive
            })
        }}>
            {children}
        </NavLink>
    );
}
 
export {AppLink};