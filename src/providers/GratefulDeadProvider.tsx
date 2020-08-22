import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IGratefulDeadProviderProps {
    children: React.ReactNode;
}

export const GratefulDeadContext = React.createContext<Artist | null>(null);
GratefulDeadContext.displayName = 'Grateful Dead';

const GratefulDeadProvider: React.FC<IGratefulDeadProviderProps> = props => {
    const { children } = props;
    const [gratefulDeadData, setGratefulDeadData] = React.useState<Artist | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response: Artist = await Fetcher('https://api.discogs.com/artists/246650');
                setGratefulDeadData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <GratefulDeadContext.Provider
            value={gratefulDeadData}
        >
            {children}
        </GratefulDeadContext.Provider>
    )
};

export default GratefulDeadProvider;
