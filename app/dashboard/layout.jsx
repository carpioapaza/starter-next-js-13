'use client';
import {usePietra} from '../../context/PietraContext';
import {useRouter} from 'next/navigation';

const DashboardLayout = ({children}) => {
  const {isLogged} = usePietra();
  const router = useRouter();
  if (!isLogged) {
    router.push('/login');
  }
  return (
    <div style={{color: 'red', paddingTop: '5rem'}}>
      <h3>Navbar</h3>
      {children}
    </div>
  );
};

export default DashboardLayout;
