import { FC } from "react";
import telephone_icon from '../../images/icons/tel_icon.svg';
import './CallTo.scss';

const CallTo: FC = () => {
  return (
    <div className="call_to">
      <a href="tel:+37477497515" className="call_to_link">
        <img src={telephone_icon} alt="telephone_icon" />
      </a>
    </div>
  )
}

export default CallTo;