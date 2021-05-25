type ReleaseStats = {
    community: {
        in_collection: number;
        in_wantlist: number;
    }
}

interface IReleaseCommon {
    artist: string;
    id: number;
    resource_url: string;
    role: string;
    stats: ReleaseStats;
    thumb: string;
    title: string;
    type: 'master' | 'release';
    year: number;
}

interface IRelease extends IReleaseCommon {
    format: string;
    label: string;
    status: 'accepted';
    type: 'release';
}

interface IReleaseMaster extends IReleaseCommon {
    main_release: number;
    type: 'master'
}

interface IReleasesData {
    pagination: IPagination;
    releases: Array<IRelease | IReleaseMaster>;
}
