import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { name, email, password };

    dispatch(signIn(user));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
          type="text"
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Create a password"
          type="password"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
