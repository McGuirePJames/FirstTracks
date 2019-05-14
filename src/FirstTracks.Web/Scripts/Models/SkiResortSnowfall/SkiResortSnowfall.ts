export class SkiResortSnowfall {
    skiResortSnowfallId: string;
    month: number;
    year: number;
    inches: number;
    createdOn: Date;
    modifiedOn: Date;

    constructor(skiResortSnowfallId: string,
        month: number,
        year: number,
        inches: number,
        createdOn: Date,
        modifiedOn: Date)
    {
        this.skiResortSnowfallId = skiResortSnowfallId;
        this.month = month;
        this.year = year;
        this.inches = inches;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
    }
}
export default SkiResortSnowfall;