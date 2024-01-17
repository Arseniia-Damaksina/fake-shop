import LoginForm from "../components/LoginForm.jsx";
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const LoginPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Header title={"Log in"} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
