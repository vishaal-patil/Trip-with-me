import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from './layout/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { OnboardingFlow } from './pages/OnboardingFlow';
import { AppProvider, useApp } from './store/AppContext';

// Access app state inside the provider
const Content = () => {
  const { appState } = useApp();

  return (
    <AnimatePresence mode="wait">
      {appState === 'LANDING' && (
        <motion.div key="landing" exit={{ opacity: 0 }} className="fixed inset-0 z-50">
          <LandingPage />
        </motion.div>
      )}

      {appState === 'LOGIN' && (
        <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
          <LoginPage />
        </motion.div>
      )}

      {appState === 'ONBOARDING' && (
        <motion.div key="onboarding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
          <OnboardingFlow />
        </motion.div>
      )}

      {appState === 'APP' && (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full">
          <MainLayout />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}

export default App;
