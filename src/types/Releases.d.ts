interface IRelease {
    artist: string;
    id: number;
    format?: string;
    label?: string;
    main_release: number;
    status?: 'accepted';
    resource_url: string;
    role: string;
    thumb: string;
    title: string;
    type: 'master' | 'release';
    year: number;

}

interface IReleasesData {
    pagination: IPagination;
    releases: Array<IRelease>;
}
