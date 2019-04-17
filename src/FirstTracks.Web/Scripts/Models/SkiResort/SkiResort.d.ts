import { Trail } from '../Trail/Trail';
export declare class SkiResort {
    skiResortId: string;
    name: string;
    city: string;
    state: string;
    imagePath: string;
    mountainHref: string;
    rating: number;
    tags: string[];
    trails: Trail[];
    constructor(skiResortId: string, name: string, city: string, state: string, imagePath: string, mountainHref: string, rating: number, tags: string[], trails: Trail[]);
}
