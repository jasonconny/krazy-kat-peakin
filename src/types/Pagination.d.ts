interface IPagination {
    items: number,
    per_page: number;
    page: number;
    pages: number;
    urls: {
        first?: string;
        last?: string;
        next?: string;
        prev?: string;
    }
}
