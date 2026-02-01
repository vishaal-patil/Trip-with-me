import { createContext, useContext, useState, type ReactNode } from 'react';

export type AppState = 'LANDING' | 'LOGIN' | 'ONBOARDING' | 'APP';

interface AppContextType {
    appState: AppState;
    setAppState: (state: AppState) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [appState, setAppState] = useState<AppState>('LANDING');

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within a AppProvider');
    }
    return context;
};
