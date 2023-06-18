type Result = {
    pageid: string;
    title: string;
    extracts: string;
    thumbnail: {
        source: string;
        width: number;
        height: number;
    };
};

type SearchResult = {
    query?: {
        pages?: Result[];
    };
};
