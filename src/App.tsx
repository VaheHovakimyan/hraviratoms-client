import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import Footer from './components/footer/Footer';
import CallTo from './components/call-to/CallTo';
import TimeLine from './components/timeline/TimeLine';
import Location from './components/location/Location';

import 'react-international-phone/style.css';
import './App.css';

export interface ILocationData {
  name: string;
  background: string;
}

const locationData: ILocationData = {
  name: "Nor Dvin",
  background: ''
}

function App() {

  return (
    <div className='main_wrapper'>
      <Welcome />
      <TimeLine />
      <Location locationData={locationData} />
      <ContactOwnerForm />
      <Footer />
      <CallTo />
    </div>
  );
}

export default App;
