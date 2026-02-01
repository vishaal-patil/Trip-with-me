import { createContext, useContext, useState, type ReactNode } from 'react';

export type WidgetType = 'HOME' | 'PROFILE' | 'GEMS' | 'BOOK';

interface WidgetContextType {
    activeWidget: WidgetType;
    setActiveWidget: (widget: WidgetType) => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const WidgetProvider = ({ children }: { children: ReactNode }) => {
    const [activeWidget, setActiveWidget] = useState<WidgetType>('HOME');

    return (
        <WidgetContext.Provider value={{ activeWidget, setActiveWidget }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidget = () => {
    const context = useContext(WidgetContext);
    if (!context) {
        throw new Error('useWidget must be used within a WidgetProvider');
    }
    return context;
};
