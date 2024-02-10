import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components/index';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="james" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="stepenson"
        />
        <FormRow type="text" name="location" defaultValue="cambodia" />
        <FormRow type="text" name="email" defaultValue="james@email.com" />
        <FormRow type="password" name="password" defaultValue="test123456" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already is a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
