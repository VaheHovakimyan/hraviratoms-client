import { FC, useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import { sendInviteRequest } from '../../api/invite-api';
import { PhoneInput } from 'react-international-phone';
import person_icon from '../../images/contact/person_icon.svg';
import './ContactOwnerForm.scss';

const initialValue = {
  name: '',
  phone: '',
}

const ContactOwnerForm: FC = () => {
  const [phone, setPhone] = useState<string>();

  useEffect((): void => {
    fetch(`${process.env.REACT_APP_API_PROD}/api`)
      .then((res) => console.log("res", res))
      .catch((err: any) => console.log(err))

  }, []);

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={async (values) => {
          console.log("values", values);
          await sendInviteRequest({ ...values, phone });
        }}
      >
        {({ values, isValid, handleChange }) => (
          <Form>
            <div className="contact_main_div">

              <h3 className="contact_div_title">Պատասխան կարող եք ուղարկել մինչև 15.01.2025թ</h3>

              <div className="contact_form">
                <div className="contact_form_input_div">
                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Անուն Ազգանուն</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <img src={person_icon} alt="person_icon" className="contact_form_input_icon" />
                        <input type="text" className="contact_input" />
                      </div>
                    </div>
                  </div>

                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Հեռախոսահամար</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <PhoneInput
                          defaultCountry="am"
                          value={phone}
                          onChange={(phone: any) => setPhone(phone)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_div_general_2">
                  <p className="contact_paragraph">Արարողությանը ներկա եք լինելու?</p>

                  <div id="contact_input">
                    <div>
                      <input type="radio" name="answer" id="Yes" />
                      <label className="contact_radio_label">Այո</label>
                    </div>
                    <div>
                      <input type="radio" name="answer" id="No" />
                      <label className="contact_radio_label">Ոչ</label>
                    </div>
                  </div>

                  <button className="contact_button">Ուղարկել</button>
                </div>
              </div>
              {/* <TextField
                id="name"
                name="name"
                placeholder="Name"
                style={{ color: 'white', background: 'white' }}
                onChange={handleChange}
              />

              <PhoneInput
                defaultCountry="am"
                value={phone}
                onChange={(phone: any) => setPhone(phone)}
              /> */}


              {/* 
                <TextField
                  id="telNumber"
                  name="telNumber"
                  placeholder="Telephone number"
                  style={{ color: 'white', background: 'white' }}
                  onChange={handleChange}
                /> */}

              {/* <Button type="submit" style={{ height: '70px' }}>Submit</Button> */}
            </div>
          </Form>
        )}
      </Formik >
    </>
  )
}

export default ContactOwnerForm;