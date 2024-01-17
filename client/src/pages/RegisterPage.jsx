import RegisterForm from '../components/RegisterForm.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const RegisterPage = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Header title={"Registration"} />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage