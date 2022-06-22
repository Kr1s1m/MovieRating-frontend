export class Movie {
    id: number;
    title: string;
    year: number;
    starType: string;
    ratedCount: number;
    rating: number;
    description: string;

    constructor(id: number = 0, title: string = "", year: number = 0, starType: string = "Default", ratedCount: number = 0, rating: number = 0, description: string = "")
    {
        this.id = id;
        this.title = title;
        this.year = year;
        this.starType = starType;
        this.ratedCount = ratedCount;
        this.rating = rating;
        this.description = description;
    }
}
