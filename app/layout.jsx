import Header from './components/Header/Header';
import '../styles/globals.css';
import {PietraProvider} from '../context/PietraContext';
export const metadata = {
  title: 'Pietra Preziosa',
  description: 'Generated by Next.js',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body>
        <PietraProvider>
          <Header />
          {children}
        </PietraProvider>
      </body>
    </html>
  );
}
