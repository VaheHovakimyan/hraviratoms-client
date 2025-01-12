import { FC } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import timeline_background from '../../images/timeline_background.png';
import './TimeLine.scss';

const data = [
  {
    icon: <HomeIcon />,
    time: '12:00',
    location: 'Square'
  },
  {
    icon: <ChurchIcon />,
    time: '14:00',
    location: 'Church'
  },
  {
    icon: <RestaurantIcon />,
    time: '18:00',
    location: 'Restaurant'
  },
];

const TimeLine: FC = () => {
  return (
    <div className="timeline_main">
      <img src={timeline_background} alt="timeline_background" className="timeline_main_background" />
      <h2 className="timeline_title">Timeline</h2>
      <div className="timeline_content">
        {data.map((item, index) => {
          return (
            <div className="timeline_item" key={index}>
              {/* <img src={item.icon} alt="timeline_icon" /> */}
              {item.icon}
              <p className="time_item">{item.time}</p>
              <p className="location_item">{item.location}</p>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default TimeLine;