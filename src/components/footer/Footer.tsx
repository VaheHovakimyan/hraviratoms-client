import { FC } from "react";
import footer_logo from '../../images/logo/logo_hraviratoms.svg';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <div className="footer_main">
      <div className="footer_logo">White
        <img src={footer_logo} alt="" />
      </div>
      <p className="tekst_hraviratoms">Hraviratoms.com

      </p>

      <div className="number">
        <div>
          <img src={footer_logo} alt="" width="24px" height="24px"/>
          <p>+374 77 49 75 15</p>
        </div>
        <div>
          <img src={footer_logo} alt="" width="24px" height="24px"/>
          <p>+374 77 49 75 15</p></div>
      </div>

      <div className="mail_hraviratoms">
        <img src={footer_logo} alt="" width="24px" height="24px"/>hraviratoms.com@gmail.com
      </div>
    </div>
  )
}

export default Footer;