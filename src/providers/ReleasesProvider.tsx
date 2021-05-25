import * as React from 'react';
import { Fetcher } from 'fetcher';

export const ReleasesContext = React.createContext<IReleasesData | null>(null);
ReleasesContext.displayName = 'Releases';

const ReleasesProvider: React.FC<IProviderProps> = props => {
    const { artistId, consumerKey, consumerSecret, children } = props;
    const [releasesData, setReleasesData] = React.useState<IReleasesData | null>(null);

    let releasesUrl = `https://api.discogs.com/artists/${artistId}/releases`;

    if (consumerKey && consumerSecret) {
        releasesUrl = `${releasesUrl}?key=${consumerKey}&secret=${consumerSecret}`;
    }

    React.useEffect(() => {
        (async () => {
            try {
                const response = await Fetcher(releasesUrl);
                setReleasesData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [artistId, releasesUrl]);

    return (
        <ReleasesContext.Provider value={releasesData}>
            {children}
        </ReleasesContext.Provider>
    )
};

export default ReleasesProvider;
