import { Link } from "react-router-dom";
import cls from "./GoogleMap.module.scss";

const GoogleMap = () => {
  
  return (
    <div className={cls.map}>
      <iframe
        width="100%"
        height="400"
        // frameBorder="0"
        // scrolling="no"
        // marginHeight="0"
        // marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1135%20North%20Yarbrough%20Drive+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <Link to="https://www.gps.ie/">gps tracker sport</Link>
      </iframe>
    </div>
  );
};

export { GoogleMap };