import { GoogleMap } from '@/ui/GoogleMap';
import cls from './ContactInfo.module.scss';
import { dineHours } from '@/const/const';
import { Link } from 'react-router-dom';

const ContactInfo = () => {

    const workTime =  dineHours.map(el => {
            return (
                <div className={cls.workTime} key={el.day}>
                    <p>
                        {el.day}
                    </p>
                    <p>
                        {el.time}
                    </p>
                </div>
            )
        })
        
    return (
        <section className={cls.contactForm} id='contactInfo'>
            <div className={cls.info}>
                <h3>
                    Dine In Hours :
                </h3>
                <div className={cls.dineHours}>
                    {workTime}
                </div>
                <div className={cls.location}>
                    <strong>Location & Drive-Thru :</strong>
                    <span>1135 North Yarbrough Drive <br/>VIRGINIA BEACH VA, 23452</span>
                </div>
                <div className={cls.phone}>
                    <strong>Phone :</strong>
                    <Link to="tel:+17579999999">+1 (757) 999-99-99</Link>
                </div>
            </div>
            <div className={cls.map}>
                <GoogleMap />
            </div>
        </section>
    );
}
 
export {ContactInfo};