import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import './App.css';
import 'react-international-phone/style.css';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='main_wrapper'>
      <Welcome />
      <ContactOwnerForm />
      <Footer />
    </div>
  );
}

export default App;
