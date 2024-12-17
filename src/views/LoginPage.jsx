import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if login data is already stored in localStorage
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      onLogin(savedRole === 'admin');
      navigate(savedRole === 'admin' ? '/serviceProfile' : '/serviceProfile');
    }
  }, [onLogin, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Admin and User Credentials
    const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
    const userCredentials = { email: 'user@example.com', password: 'user123' };

    if (role === 'admin') {
      if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem('role', 'admin'); 
        onLogin(true);
        navigate('/serviceProfile');
      } else {
        setError('Invalid admin credentials');
      }
    } else if (role === 'user') {
      if (email === userCredentials.email && password === userCredentials.password) {
        localStorage.setItem('role', 'user'); 
        onLogin(false);
        navigate('/serviceProfile');
      } else {
        setError('Invalid user credentials');
      }
    }
  };

  return (
    <div className='bg-[#622C98] w-screen h-screen flex items-center justify-center'>
      <form
        className='bg-gray-200 md:w-2/5 w-4/5 px-5 py-8 flex flex-col gap-8 rounded-[10px] opacity-80 border-2 border-black'
        onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-1'>
          <h1 className='md:text-3xl text-2xl text-center font-bold'>Welcome</h1>
          <p className='text-center'>Login to your account to continue</p>
        </div>

        <div className='flex justify-between gap-2 border-b-2 border-b-[#622C98] pb-2'>
          <input
            className='block w-full border-none outline-none focus:outline-none focus:border-none bg-transparent'
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <div className='flex justify-between gap-2 border-b-2 border-b-[#622C98] pb-2'>
          <input
            className='block w-full border-none outline-none focus:outline-none focus:border-none bg-transparent'
            type='password'
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} />
        </div>

        {/* Role Selection */}
        <div className='flex flex-col gap-2'>
          <label className='text-center'>Select Role:</label>
          <div className='flex justify-center gap-4'>
            <label className='flex items-center'>
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              <span className='ml-2'>User</span>
            </label>
            <label className='flex items-center'>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
              <span className='ml-2'>Admin</span>
            </label>
          </div>
        </div>

        {error && <p className='text-red-500 text-center'>{error}</p>}

        <button className='bg-[#622C98] py-2 rounded-[5px] text-gray-200 text-xl font-medium'>Login</button>

        <p className='text-center'>Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign up here</span></p>

        <p>adminCredentials: email - 'admin@example.com' password: 'admin123' </p>
        <p>userCredentials: email - 'user@example.com' password: 'user123' </p>
      </form>
    </div>
  );
};

export default LoginPage;
