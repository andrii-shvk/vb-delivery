import cls from './ScrollToTop.module.scss';
import { memo, useEffect, useState } from "react";
import BackToTopIcon from "@/assets/img/IconsUI/ScrollToTop.svg"
import { Icon } from "@/ui/Icon";

const ScrollToTop = memo(() => {
    const scrollToTop = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}
	const [active, setActive] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			let scrollY = window.scrollY;
			scrollY > 350 ? setActive(true) : setActive(false);
		}
		window.addEventListener('scroll', handleScroll);
	}, []);

    return (
        <div id="back_to_top" className={`${cls.backToTop} ${active === true ? `${cls.active}` : ''}`} onClick={scrollToTop}>
            <Icon Svg={BackToTopIcon} />
        </div>
    );
})
 
export {ScrollToTop};