export class Movie {
    id: number;
    title: string;
    year: number;
    starType: string;
    votes: number;
    rating: number;
    description: string;

    constructor(title: string = "", year: number = 0, starType: string = "Default", votes: number = 0, rating: number = 0, description: string = "")
    {
        this.id = 0;
        this.title = title;
        this.year = year;
        this.starType = starType;
        this.votes = votes;
        this.rating = rating;
        this.description = description;
    }

   


}