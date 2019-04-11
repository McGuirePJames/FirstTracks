export class SkiResort {
    skiResortId: string;
    name: string;
    city: string;
    state: string;
    imagePath: string;
    mountainHref: string;
    rating: number;
    tags: string[];

    constructor(skiResortId: string, name: string, city: string, state: string, imagePath: string, mountainHref:string, rating: number, tags: string[]) {
        this.skiResortId = skiResortId;
        this.name = name;
        this.city = city;
        this.state = state;
        this.imagePath = imagePath;
        this.mountainHref = mountainHref;
        this.rating = rating;
        this.tags = tags;
    }
}