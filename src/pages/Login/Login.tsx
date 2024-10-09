import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServerClient from '../../services/ServerClient';
import { Icon } from '@iconify/react';
import useLoginStore from '../../store/useLoginStore';
import { loginData } from '../../data/loginData';
import Button from '../../components/Button';

const Login = () => {
  const [name, setName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [invalidLogin, setInvalidLogin] = useState('');
  const { setUserLogin, setUserId, setUserName, setFlag } = useLoginStore();

  const navigate = useNavigate();

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangeUserName', e.target.value);
    setName(e.target.value);
    setInvalidLogin('');
  };
  const handleChangePasscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangePasscode', e.target.value);
    setPasscode(e.target.value);
    setInvalidLogin('');
  };

  // login
  const onLogin = async () => {
    if (!name || !passcode) {
      setInvalidLogin('All Fields Required');
      return;
    }

    try {
      const serverClient = new ServerClient('/api/login');
      const res = await serverClient.post({ name, passcode });
      console.log('res', res.data);
      setUserLogin(true);
      setUserId(res.data.userId);
      setUserName(res.data.name);
      setFlag(res.data.flag);
      navigate('/Tasks');
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[440px]'>
        <div className='flex flex-col items-center gap-6'>
          <Icon icon='fluent-emoji-high-contrast:raccoon' className='home-icon text-purple w-[60px] h-[60px]' />
          <p>Log in with the username and passcode below and assign the task to another user.</p>
          <div className='flex justify-center items-center gap-7'>
            {loginData.map((login) => (
              <fieldset key={login.id} className='border-2 border-gray-300 p-4 rounded'>
                <legend className='text-lg font-semibold px-2'>{login.accountName}</legend>
                <p>
                  username:<span className='font-bold ml-2'>{login.userName}</span>
                </p>
                <p>
                  passcode:<span className='font-bold ml-2'>{login.passcode}</span>
                </p>
              </fieldset>
            ))}
          </div>
          <div className='flex flex-col gap-4 mt-7 w-[440px]'>
            <p className='text-red-500 text-right'>{invalidLogin}</p>
            <div>
              <input type='text' placeholder='username' className='border border-slate-400 rounded-sm p-2 w-full' value={name} onChange={handleChangeUserName} />
            </div>
            <div>
              <input type='password' placeholder='passcode' className='border border-slate-400 rounded-sm p-2 w-full' value={passcode} onChange={handleChangePasscode} />
            </div>
          </div>
          <Button buttonName='Log in' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2 w-full' buttonClick={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
