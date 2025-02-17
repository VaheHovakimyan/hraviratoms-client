import { FC } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import timeline_background from '../../images/timeline_background.png';
import { ITimeline } from "../../common/type";
import './TimeLine.scss';


const data: ITimeline[] = [
  {
    icon: <HomeIcon />,
    time: '12:00',
    location: 'Հարսի Տուն'
  },
  {
    icon: <ChurchIcon />,
    time: '14:00',
    location: 'Եկեղեցի'
  },
  {
    icon: <RestaurantIcon />,
    time: '18:00',
    location: 'Ռեստորան'
  },
];

const TimeLine: FC = () => {
  return (
    <div className="timeline_main">
      <img src={timeline_background} alt="timeline_background" className="timeline_main_background" />
      <h2 className="timeline_title">Ժամանակացույց</h2>
      <div className="timeline_content">
        {data.map((item) => {
          return (
            <div className="timeline_item" key={item.location}>
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