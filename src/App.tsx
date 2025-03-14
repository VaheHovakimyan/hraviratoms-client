import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import Footer from './components/footer/Footer';
import CallTo from './components/call-to/CallTo';
import TimeLine from './components/timeline/TimeLine';
import Location from './components/location/Location';
import { locationData } from './common/consts';
import 'react-international-phone/style.css';
import './App.css';


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
