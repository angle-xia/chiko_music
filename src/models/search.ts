export interface cloudSearch {

}



export interface SearchHotDetailType {
    alg: string;
    content?: string;
    iconType: number;
    iconUrl: string;
    score: number;
    searchWord: string;
    source: number;
    url: string;
}

export interface SearchSuggestType {
    albums?: [];
    artists?: [];
    songs?: [];
    playlists?: []
}