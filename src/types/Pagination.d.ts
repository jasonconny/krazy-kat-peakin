interface IPagination {
    items: number,
    per_page: number;
    page: number;
    pages: number;
    urls: {
        next: string;
        last: string;
    }
}
