import { FC, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import './Admin.scss';
import { getGuests } from "../../api/invite-api";

interface IGuestData{
  _id: string;
  name?: string;
  phone: string;
  isVisiting?: string;
}

const Admin: FC = () => {
  const [guests, setGuests] = useState<IGuestData[]>([]);

  useEffect((): void => {
    getGuests()
      .then((res) => res.json())
      .then((data) => {
        setGuests(data);
      })
  }, []);

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
        {guests.map((item, index) => {
          return (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item?.name || ''}</td>
              <td>{item?.phone || ''}</td>
              <td>{item.isVisiting === "Yes" ? 'Այո' : 'Ոչ'}</td>
            </tr>
          )
        })}
      </table>
      <Footer />
    </div>
  )
}

export default Admin;