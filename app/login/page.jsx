'use client';
import Link from 'next/link.js';
import {useState} from 'react';
import {supabase} from '../../api/client';
import './LoginPage.scss';
import {usePietra} from '../../context/PietraContext';
import {useRouter} from 'next/navigation';

const LoginPage = () => {
  const {isLogged} = usePietra();
  const {loginPage} = usePietra();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  if (isLogged) {
    router.push('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 2000);
      return;
    }
    setIsEmpty(false);
    setIsLoading(true);
    try {
      const {error} = await supabase.auth.signInWithPassword({email, password});
      if (error) {
        setIsLoading(false);
        setTimeout(() => {
          setIsLogin(true);
        }, 2000);
      } else {
        setIsLogin(true);
        setIsLoading(false);
        console.log('logged');
        // navigate('/dashboard');
        loginPage();
        router.push('/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  console.log(isLogged);

  // useEffect(() => {
  // const getUser = async () => {
  //   const {
  //     data: {user},
  //   } = await supabase.auth.getUser();
  //   if (user) {
  //     // navigate('/');
  //     console.log(data);
  //   }
  // };
  // getUser();
  // }, []);

  return (
    <div className='login ml-padding'>
      <div
        className={`login__content ${
          isEmpty ? 'login__shake' : !isLogin ? 'login__shake' : ''
        }`}
      >
        <h1 className='login__title'>
          {isEmpty
            ? `Datos incompletos 😔`
            : !isLogin
            ? 'Datos incorrectos 😔'
            : '¡Hola! 😊'}
        </h1>
        <form className='login__form ' onSubmit={handleSubmit}>
          <input
            className='login__input login__input-email'
            type='email'
            name='email'
            placeholder='Correo'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='login__input login__input-password'
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login__btn' disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
          <Link href={`/register`}>Regístrate </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
