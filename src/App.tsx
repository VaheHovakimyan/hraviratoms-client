import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import './App.css';
import 'react-international-phone/style.css';
import Footer from './components/footer/Footer';
import CallTo from './components/call-to/CallTo';
import TimeLine from './components/timeline/TimeLine';

function App() {

  return (
    <div className='main_wrapper'>
      <Welcome />
      <TimeLine />
      <ContactOwnerForm />
      <Footer />
      <CallTo />
    </div>
  );
}

export default App;
