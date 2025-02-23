import { FC, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import './Admin.scss';
import { getGuests } from "../../api/invite-api";
import Loader from "../loader/Loader";

interface IGuestData {
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
    <>
      <h3>Գեղամ Հակոբյանի հյուրերի ցուցակը</h3>
      <div className="table">
        <div className="tr">
          <div className="admin_param" id="guest_id">No.</div>
          <div className="admin_param" id="guest_name">Անուն Ազգանուն</div>
          <div className="admin_param" id="guest_phone">Հեռախոսահամար</div>
          <div className="admin_param" id="guest_isVisting">Ներկա Կգտնվի՞</div>
        </div>
        {guests.length ? guests.map((item, index) => {
          return (
            <div key={item._id} className="tr">
              <div id="guest_id" className="td">
                <p className="td_p">{index + 1}</p>
              </div>
              <div id="guest_name" className="td">
                <p className="td_p">{item?.name || ''}</p>
              </div>
              <div id="guest_phone" className="td">
                <p className="td_p">{item?.phone || ''}</p>
              </div>
              <div id="guest_isVisting" className="td">
                <p className="td_p">{item.isVisiting === "Yes" ? 'Այո' : 'Ոչ'}</p>
              </div>
            </div>
          )
        }) : <Loader message="Խնդրում ենք սպասել․․․" />}

      </div>
      <Footer />
    </>
  )
}

export default Admin;