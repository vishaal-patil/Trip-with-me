import { WidgetProvider, useWidget } from '../store/WidgetContext';
import { Navigation } from './Navigation';
import { ProfileWidget } from '../widgets/ProfileWidget';
import { FeedWidget } from '../widgets/FeedWidget';
import { GemWidget } from '../widgets/GemWidget';
import { motion, AnimatePresence } from 'framer-motion';

const WidgetContainer = () => {
    const { activeWidget } = useWidget();

    // Mapping of widgets
    const renderWidget = () => {
        switch (activeWidget) {
            case 'HOME':
                return <FeedWidget />;
            case 'PROFILE':
                return <ProfileWidget />;
            case 'GEMS':
                return <GemWidget />;
            case 'BOOK':
                return <div className="text-white text-2xl flex justify-center items-center h-full">Travel Book Coming Soon</div>;
            default:
                return <FeedWidget />;
        }
    };

    return (
        <div className="relative w-full h-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeWidget}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="w-full h-full"
                >
                    {renderWidget()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export const MainLayout = () => {
    return (
        <WidgetProvider>
            <div className="relative w-full h-screen overflow-hidden bg-background">
                {/* Ambient Background Effects */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-30" />

                <WidgetContainer />
                <Navigation />
            </div>
        </WidgetProvider>
    );
};
