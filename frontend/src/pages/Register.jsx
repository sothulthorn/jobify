import { Logo, FormRow, SubmitButton } from '../components/index';
import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Register successfully');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
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
        <SubmitButton />
        <p>
          Already is a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
