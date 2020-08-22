import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IArtistProviderProps {
    children: React.ReactNode;
}

export const ArtistContext = React.createContext<Artist | null>(null);
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IArtistProviderProps> = props => {
    const { children } = props;
    const [artistData, setArtistData] = React.useState<Artist | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response: Artist = await Fetcher('https://api.discogs.com/artists/246650');
                setArtistData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <ArtistContext.Provider
            value={artistData}
        >
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
