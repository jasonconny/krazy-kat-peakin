import * as React from 'react';
import { Fetcher } from 'fetcher';

export const ReleasesContext = React.createContext<IReleasesData | null>(null);
ReleasesContext.displayName = 'Releases';

const ReleasesProvider: React.FC<IProviderProps> = props => {
    const { artistId, children } = props;
    const [releasesData, setReleasesData] = React.useState<IReleasesData | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await Fetcher(`https://api.discogs.com/artists/${artistId}/releases`);
                setReleasesData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [artistId]);

    return (
        <ReleasesContext.Provider value={releasesData}>
            {children}
        </ReleasesContext.Provider>
    )
};

export default ReleasesProvider;
