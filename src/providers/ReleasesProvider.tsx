import * as React from 'react';
import { Fetcher } from 'fetcher';

interface IReleasesProviderProps {
    artistId: number;
    children: React.ReactNode;
}

export const ReleasesContext = React.createContext([]);
ReleasesContext.displayName = 'Releases';

const ReleasesProvider: React.FC<IReleasesProviderProps> = props => {
    const { artistId, children } = props;
    const [releasesData, setReleasesData] = React.useState([]);

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
