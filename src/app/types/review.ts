export class Review {
    id: number;

    movieId: number;
    movieTitle: string;
    movieYear: number;

    accountId: number;
    reviewerUsername: string;
    
    title: string;
    score: number;
    body: string;
    date: Date;

    constructor(movieId: number, accountId: number, reviewerUsername: string,
                title: string, score: number, body: string) {
        this.id = 0;

        this.movieId = movieId;
        this.movieTitle = "";
        this.movieYear = 0;

        this.accountId = accountId;
        this.reviewerUsername = reviewerUsername;

        this.title = title;
        this.score = score;
        this.body = body;
        this.date = new Date();
    }
}