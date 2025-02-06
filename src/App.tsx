import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import Footer from './components/footer/Footer';
import CallTo from './components/call-to/CallTo';
import TimeLine from './components/timeline/TimeLine';
import Location from './components/location/Location';

import location_icon from './images/location/church_icon.png';
import restaurant_icon from './images/location/nor_dvin.jpg';

import 'react-international-phone/style.css';
import './App.css';


export interface ILocationDataContent {
  name: string;
  background: string;
  link: string;
}

export interface ILocationData {
  church: ILocationDataContent,
  restaurant: ILocationDataContent
}


const locationData: ILocationData = {
  church: {
    name: 'Պսակադրության արարողությունը տեղի կունենա Հռիփսիմե եկեղեցում',
    background: location_icon,
    link: 'https://maps.app.goo.gl/XkLZw953nEbLyxFu7'
  },
  restaurant: {
    name: 'Հարսանըանց հանդեսը տեղի կունենա “Nor dvin” ռեստորանում',
    background: restaurant_icon,
    link: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Nor+Dvin+Armenia'
  }
}

function App() {

  return (
    <div className='main_wrapper'>
      <Welcome />
      <TimeLine />
      <Location locationData={locationData.church} />
      <Location locationData={locationData.restaurant} />
      <ContactOwnerForm />
      <Footer />
      <CallTo />
    </div>
  );
}

export default App;
