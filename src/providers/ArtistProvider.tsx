import * as React from 'react';
import { Fetcher } from 'fetcher';

export const ArtistContext = React.createContext<IArtistData | null>(null);
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IProviderProps> = props => {
    const { artistId, children } = props;
    const [artistData, setArtistData] = React.useState<IArtistData | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response: IArtistData = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
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
