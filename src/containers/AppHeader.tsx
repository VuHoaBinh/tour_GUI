import { Close, Menu, ShoppingCart } from '@mui/icons-material';
import { AppBar, Container, Drawer, IconButton, Toolbar } from '@mui/material';
import { AppMenu } from 'containers';
import { useWindowSize } from 'hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';
import AuthService from '../firebase/AuthService';

const AppHeader = () => {
  const location = useLocation();

  const { isScreenLG } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenSign, setModalIsOpenSign] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [value, setValue] = useState<any>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const openModalSign = () => {
    setModalIsOpenSign(true);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email: string = e.target.value;

    // const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if (emailPattern.test(email)) {
    setEmail(email);
    // } else {
    //   alert('Invalid email format');
    // }
  };
  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordConfirm: string = e.target.value;

    // if (password === passwordConfirm) {
    //   setPassword(password);
    // } else {
    //   alert('Invalid email format');
    // }
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password: string = e.target.value;

    // if (password.length >= 6) {
    setPassword(password);
    // } else {
    //   alert('Invalid password format: less 6 charater');
    // }
  };

  const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    const fullName: string = e.target.value;

    // const [firstName, lastName] = fullName.trim().split(' ');

    // const nameRequirements = {
    //   minLength: 2,
    //   allowOnlyLetters: /^[a-zA-Z]+$/,
    // };

    // if (
    //   firstName?.length >= nameRequirements.minLength &&
    //   lastName?.length >= nameRequirements.minLength &&
    //   nameRequirements.allowOnlyLetters.test(firstName) &&
    //   nameRequirements.allowOnlyLetters.test(lastName)
    // ) {
    setFullName(fullName);
    // } else {
    //   alert('Invalid Name format');
    // }
  };
  const onSubmitFormSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await AuthService.register(email, password);
      await AuthService.update(fullName);
      console.log('Đăng kí user:', user);
    } catch (error) {
      console.log('Loi ne:', error);
    }
    setModalIsOpen(false);
  };

  const onSubmitFormLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userLogin = await AuthService.login(email, password);
      console.log('Đăng nhập thành công: ', userLogin);
      setValue(userLogin);
    } catch (error) {
      console.log('Loi ne:', error);
    }
    setModalIsOpen(false);
  };
  const onClickSignOut = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.logout();
    window.location.reload();
  };
  return (
    <>
      <Drawer
        variant={isScreenLG ? 'temporary' : 'persistent'}
        anchor='left'
        open={isScreenLG ? openDrawer : false}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '250px', padding: '20px' } }}
      >
        <IconButton className='ml-auto p-0' onClick={() => setOpenDrawer(false)}>
          <Close fontSize='medium' />
        </IconButton>
        <div className='mt-5 flex flex-col gap-3 text-sm text-[#666666D9]'>
          <AppMenu />
        </div>
      </Drawer>

      <AppBar position='sticky' color='transparent' elevation={0} className='bg-paper-main'>
        <Container maxWidth='lg'>
          <Toolbar component={Container} maxWidth='xl' className='relative flex items-center px-0'>
            <IconButton onClick={() => setOpenDrawer(true)} className='absolute  lg:hidden'>
              <Menu />
            </IconButton>
            <IconButton className='absolute right-0 lg:hidden'>
              <ShoppingCart />
            </IconButton>
            <div className='mx-auto'>
              <Link to={privateRoute.home.path}>
                <img
                  src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/logo_dark.png'
                  alt='Logo'
                />
              </Link>
            </div>

            <div className='hidden flex-1 items-center justify-end py-3 lg:flex'>
              <AppMenu />
            </div>
            {value ? (
              <>
                <p style={{ paddingLeft: 24, fontSize: 17, paddingTop: 0, color: 'red', fontWeight: 'bold' }}>
                  {' '}
                  Xin chào, {value.displayName}{' '}
                </p>
                <button onClick={onClickSignOut} style={{ paddingLeft: 10 }}>
                  <i className='fa-solid fa-arrow-right-from-bracket'></i>
                </button>
              </>
            ) : (
              <>
                {/* //////////////// Log /////////////////////////////*/}
                <button
                  data-modal-target='#authentication-modal'
                  data-modal-toggle='authentication-modal'
                  className='text-white mx-5 rounded-full border-2 bg-[#3399FF] px-4 py-2 font-bold hover:bg-[#009900]'
                  type='button'
                  onClick={openModal}
                >
                  Log in
                </button>

                {/* //////////////// Regsiter /////////////////////////////*/}
                <button
                  className='text-white rounded-full border-2 bg-[#3399FF] px-4 py-2 font-bold hover:bg-[#009900]'
                  onClick={openModalSign}
                >
                  Sign up
                </button>
              </>
            )}

            <div
              id='authentication-modal'
              tabIndex={-1}
              aria-hidden='true'
              className={`${
                modalIsOpen ? '' : 'hidden'
              } dark:bg-gray-700 fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#FFFFFF] shadow-lg md:max-w-md`}
            >
              <div className='relative'>
                <div className='dark:border-gray-600 flex items-center justify-between rounded-t border-b p-4 md:p-5'>
                  <h3 className='text-gray-900 dark:text-white text-xl font-semibold'>Đăng kí</h3>
                  <button
                    type='button'
                    className='text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm'
                    data-modal-hide='authentication-modal'
                    onClick={() => setModalIsOpen(false)}
                  >
                    <svg
                      className='h-3 w-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                  </button>
                </div>
                <div className='p-4 md:p-5'>
                  <form className='space-y-4' action='#' onSubmit={onSubmitFormLogIn}>
                    <div>
                      <label htmlFor='email' className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'>
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={onChangeEmail}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        placeholder='example@sunnytravel.com'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='password'
                        className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'
                      >
                        Your password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        onChange={onChangePassword}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        required
                      />
                    </div>

                    <button
                      type='submit'
                      className='border-3 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-40 w-1/4 rounded-lg bg-[#00FFFF] px-5 py-2.5 text-center text-center text-sm font-medium hover:bg-[#FF0000] focus:outline-none focus:ring-4'
                    >
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* ///////////// Modal ////////////////////// */}
            <div
              id='authentication-modal'
              tabIndex={-1}
              aria-hidden='true'
              className={`${
                modalIsOpenSign ? '' : 'hidden'
              } dark:bg-gray-700 fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#FFFFFF] shadow-lg md:max-w-md`}
            >
              <div className='relative'>
                <div className='dark:border-gray-600 flex items-center justify-between rounded-t border-b p-4 md:p-5'>
                  <h3 className='text-gray-900 dark:text-white text-xl font-semibold'>Đăng kí</h3>
                  <button
                    type='button'
                    className='text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm'
                    data-modal-hide='authentication-modal'
                    onClick={() => setModalIsOpenSign(false)}
                  >
                    <svg
                      className='h-3 w-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                  </button>
                </div>
                <div className='p-4 md:p-5'>
                  <form className='space-y-4' action='#' onSubmit={onSubmitFormSignUp}>
                    <div>
                      <label htmlFor='email' className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'>
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={onChangeEmail}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        placeholder='example@sunnytravel.com'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='password'
                        className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'
                      >
                        Your password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        onChange={onChangePassword}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='re-password'
                        className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'
                      >
                        Re-password
                      </label>
                      <input
                        type='password'
                        name='re-password'
                        id='password'
                        placeholder='••••••••'
                        onChange={onChangePasswordConfirm}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='fullName'
                        className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'
                      >
                        Full Name
                      </label>
                      <input
                        type='text'
                        name='fullName'
                        id='fullName'
                        placeholder='Sunny travel'
                        onChange={onChangeFullName}
                        className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white block w-full rounded-lg border p-2.5 text-sm'
                        required
                      />
                    </div>
                    <button
                      type='submit'
                      className='border-3 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-40 w-1/4 rounded-lg bg-[#00FFFF] px-5 py-2.5 text-center text-center text-sm font-medium hover:bg-[#FF0000] focus:outline-none focus:ring-4'
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppHeader;
