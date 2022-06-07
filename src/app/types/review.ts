export class Review {
    id: number;
    movieId: number;
    title: string;
    reviewerName: string;
    score: number;
    body: string;
    date: Date;

    constructor(movieId: number ,title: string,
                reviewerName: string, score: number, body: string){
        this.id = 0;
        this.movieId = movieId;
        this.title = title;
        this.reviewerName = reviewerName;
        this.score = score;
        this.body = body;
        this.date = new Date();
    }
}