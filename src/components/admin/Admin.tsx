import { FC } from "react";
import Footer from "../footer/Footer";
import './Admin.scss';



const Admin: FC = () => {
    return (
        <div>

            <h3>Գեղամ Հակոբյանի հյուրերի ցուցակը</h3>

            <table>
                <tr>
                    <th className="container">Համար</th>
                    <th className="container">Անուն Ազգանուն</th>
                    <th className="container">Հեռախոսահամար</th>
                    <th className="container">Ներկա Կգտնվի՞</th>
                </tr>
                <tr>
                    <td className="child1">1</td>
                    <td className="child1">Գեղամ Հակոբյան</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Այո</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Գեղամ Հակոբյան</td>
                    <td>+34254726378</td>
                    <td>Ոչ</td>
                </tr>
                <tr>
                    <td className="child1">3</td>
                    <td className="child1">Գեղամ Հակոբյան</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Այո</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Գեղամ Հակոբյան</td>
                    <td>+34254726378</td>
                    <td>Այո</td>
                </tr>
                <tr>
                    <td className="child1">5</td>
                    <td className="child1">Գեղամ Հակոբյան</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Ոչ</td>
                </tr>
            </table>
            <Footer />
        </div>
    )
}


export default Admin;