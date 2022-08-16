import Routes from './Routes';
import AuthProvider from './contexts/AuthContext';
import { Global } from './styles/global';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <AuthProvider>
        <Global/>
        <Routes/>
      </AuthProvider>
    </AnimatePresence>
  );
}

export default App;
