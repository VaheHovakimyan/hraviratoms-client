import { FC, useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import { sendInviteRequest } from '../../api/invite-api';
import { PhoneInput } from 'react-international-phone';
import './ContactOwnerForm.scss';

const initialValue = {
  name: '',
  phone:'',
}

const ContactOwnerForm: FC = () => {
  const [phone, setPhone] = useState<string>();

  useEffect((): void => {
    fetch(`${process.env.REACT_APP_API_PROD}/api`)
      .then((res) => console.log("res", res))
      .catch((err: any) => console.log(err))

  }, []);

  return(
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                <h3>Contact us</h3>

                <TextField
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
                />


                {/* 
                <TextField
                  id="telNumber"
                  name="telNumber"
                  placeholder="Telephone number"
                  style={{ color: 'white', background: 'white' }}
                  onChange={handleChange}
                /> */}

                <Button type="submit" style={{ height: '70px' }}>Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
        </>
  )
}

export default ContactOwnerForm;