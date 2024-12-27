import Welcome from './components/welcome/Welcome';
import ContactOwnerForm from './components/contact-owner/ContactOwnerForm';
import './App.css';
import 'react-international-phone/style.css';

function App() {

  return (
    <div className='main_wrapper'>
      <Welcome />
      <ContactOwnerForm />
    </div>
  );
}

export default App;
