import { FC } from "react";
import question_background from '../../images/question_background.png';
import 'question.scss';

const Header: FC = () => {
    return (
        <div className="question_main">
           <div className="question_logo">
             <img src={question_background} alt="question_background"/>
           </div>

           <div>
            <p className="header_text">
            Պատասխան կարող եք ուղարկել մինչև 15.01.2025թ
            </p>
           </div>

           <div>
            <p>Անուն Ազգանուն</p>
            {/* contact */}
           </div>

           <div>
            <p>Հեռախոսահամար </p>
            {/* contact */}
           </div>

           <p>Արարողությանը ներկա եք լինելու?</p>

           <div>
            {/* input, label*/}
           </div>

           <div>
            <button>Ուղարկել</button>
           </div>
        </div>
    )
}

export default Header;