import * as React from 'react';
import { Fetcher } from 'fetcher';

interface IArtistProviderProps {
    artistId: number;
    children: React.ReactNode;
}

export const ArtistContext = React.createContext<IArtist | null>(null);
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IArtistProviderProps> = props => {
    const { artistId, children } = props;
    const [artistData, setArtistData] = React.useState<IArtist | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response: IArtist = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
                setArtistData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [artistId]);

    return (
        <ArtistContext.Provider value={artistData}>
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
