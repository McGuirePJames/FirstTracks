import { Trail } from '../Trail/Trail'; 

export class SkiResort {
    skiResortId: string;
    name: string;
    city: string;
    state: string;
    imagePath: string;
    mountainHref: string;
    rating: number;
    tags: string[];
    trails: Trail[];

    constructor(
        skiResortId: string,
        name: string,
        city: string,
        state: string,
        imagePath: string,
        mountainHref: string,
        rating: number,
        tags: string[],
        trails: Trail[]
     ) {
        this.skiResortId = skiResortId;
        this.name = name;
        this.city = city;
        this.state = state;
        this.imagePath = imagePath;
        this.mountainHref = mountainHref;
        this.rating = rating;
        this.tags = tags;
        this.trails = trails;
    }
}