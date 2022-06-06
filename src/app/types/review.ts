export interface Review {
    id: number;
    movieId: number;
    title: string;
    reviewerName: string;
    score: number;
    body: string;
    date: Date;
}