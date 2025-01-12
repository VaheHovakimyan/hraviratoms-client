import { FC } from "react";
import { ILocationData } from "../../App";
import './Location.scss';

interface LocationComponentProps {
  locationData: ILocationData;
}

const Location: FC<LocationComponentProps> = ({locationData}) => {

  const {name, background} = locationData;

  return (
    <div className="location_main">
      <div className="location_content">

      </div>
    </div>
  )
}

export default Location;