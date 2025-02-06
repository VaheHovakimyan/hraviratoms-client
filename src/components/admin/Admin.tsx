import { FC } from "react";
import Footer from "../footer/Footer";
import './Admin.scss';

const Admin: FC = () => {
    return (
        <div>
            <table>
                <tr>
                    <th className="container">Number</th>
                    <th className="container">First Name</th>
                    <th className="container">Telephone</th>
                    <th className="container">Nerka Kgtnvi?</th>
                </tr>
                <tr>
                    <td className="child1">1</td>
                    <td className="child1">Gegham Hakobyan</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Ayo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Gegham Hakobyan</td>
                    <td>+34254726378</td>
                    <td>Voch</td>
                </tr>
                <tr>
                    <td className="child1">3</td>
                    <td className="child1">Gegham Hakobyan</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Ayo</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Gegham Hakobyan</td>
                    <td>+34254726378</td>
                    <td>Ayo</td>
                </tr>
                <tr>
                    <td className="child1">5</td>
                    <td className="child1">Gegham Hakobyan</td>
                    <td className="child1">+34254726378</td>
                    <td className="child1">Voch</td>
                </tr>
            </table>
            <Footer />
        </div>
    )
}


export default Admin;