import Routes from './routes';
import { Global } from './styles/global';
import { AnimatePresence } from 'framer-motion';
import { RoutesProvider } from './contexts/RoutesFunctions';
import { TechsProvider } from './contexts/TechsFunctions';

function App() {
  return (
    <AnimatePresence>
      <RoutesProvider>
        <TechsProvider>
            <Global/>
            <Routes/>
        </TechsProvider>
      </RoutesProvider>
    </AnimatePresence>
  );
}

export default App;
