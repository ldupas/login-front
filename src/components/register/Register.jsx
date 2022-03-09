import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../contexts/UserProvider';

const Register = () => {
  const navigator = useNavigate();
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/`, values)
        .then(({ data: { credential } }) => {
          setUser({
            token: credential,
          });
          navigator('/');
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className="Register">
      <h1>Create Account</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">
          email
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label htmlFor="password">
          password
          {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
