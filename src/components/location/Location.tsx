import { FC } from "react";
import { ILocationData } from "../../App"; 
import location_icon from '../../images/location/church_icon.png';
import './Location.scss';

interface LocationComponentProps {
  locationData: ILocationData;
}

const Location: FC<LocationComponentProps> = ({locationData}) => {

  const {name, background} = locationData;

  return (
    <div className="location_main">
      <div className="location_content">
         <div>
          <p className="location_text">Պսակադրության արարողությունը տեղի կունենա Հռիփսիմե եկեղեցում</p>
         </div>

         <div className="location_img">
          <img src={location_icon} alt="location_icon"/>
         </div>

         <div>
          <button className="location_map">Քարտեզ</button>
         </div>
      </div>
    </div>
  )
}

export default Location;