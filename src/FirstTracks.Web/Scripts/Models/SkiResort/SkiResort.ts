export class SkiResort {
    name: string;
    city: string;
    state: string;
    imageFilePath: string;
    rating: number;
    tags: string[];

    constructor(name: string, city: string, state: string, imageFilePath: string, rating: number, tags: string[]) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.imageFilePath = imageFilePath;
        this.rating = rating;
        this.tags = tags;
    }
}