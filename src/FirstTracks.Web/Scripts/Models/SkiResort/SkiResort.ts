export class SkiResort {
    name: string;
    city: string;
    state: string;
    imagePath: string;
    mountainHref: string;
    rating: number;
    tags: string[];

    constructor(name: string, city: string, state: string, imagePath: string, mountainHref:string, rating: number, tags: string[]) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.imagePath = imagePath;
        this.mountainHref = mountainHref;
        this.rating = rating;
        this.tags = tags;
    }
}