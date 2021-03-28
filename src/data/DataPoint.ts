import { DataPointObject } from './DataPointObjectInterface';

export class DataPoint implements DataPointObject {
    location: string = "";
    iso_code: string = "";
    date: Date | null = null;
    total_vaccinations: number = 0;
    people_vaccinated: number = 0;
    people_fully_vaccinated: number = 0;
    daily_vaccinations_raw: number = 0;
    daily_vaccinations: number = 0;
    total_vaccinations_per_hundred: number = 0;
    people_vaccinated_per_hundred: number = 0;
    people_fully_vaccinated_per_hundred: number = 0;
    daily_vaccinations_per_million: number = 0;

    constructor(dataObject: DataPointObject) {
        if (dataObject.location !== undefined)
            this.location = dataObject.location;
        if (dataObject.iso_code !== undefined)
            this.iso_code = dataObject.iso_code;
        if (dataObject.date !== undefined)
            this.date = dataObject.date;
        if (dataObject.total_vaccinations !== undefined &&
            dataObject.total_vaccinations > 0)
            this.total_vaccinations = dataObject.total_vaccinations;
        if (dataObject.people_vaccinated !== undefined &&
            dataObject.people_vaccinated > 0)
            this.people_vaccinated = dataObject.people_vaccinated;
        if (dataObject.people_fully_vaccinated !== undefined &&
            dataObject.people_fully_vaccinated > 0)
            this.people_fully_vaccinated = dataObject.people_fully_vaccinated;
        if (dataObject.daily_vaccinations_raw !== undefined &&
            dataObject.daily_vaccinations_raw > 0)
            this.daily_vaccinations_raw = dataObject.daily_vaccinations_raw;
        if (dataObject.daily_vaccinations !== undefined &&
            dataObject.daily_vaccinations > 0)
            this.daily_vaccinations = dataObject.daily_vaccinations;
        if (dataObject.total_vaccinations_per_hundred !== undefined &&
            dataObject.total_vaccinations_per_hundred > 0)
            this.total_vaccinations_per_hundred = dataObject.total_vaccinations_per_hundred;
        if (dataObject.people_vaccinated_per_hundred !== undefined &&
            dataObject.people_vaccinated_per_hundred > 0)
            this.people_vaccinated_per_hundred = dataObject.people_vaccinated_per_hundred;
        if (dataObject.people_fully_vaccinated_per_hundred !== undefined &&
            dataObject.people_fully_vaccinated_per_hundred > 0)
            this.people_fully_vaccinated_per_hundred = dataObject.people_fully_vaccinated_per_hundred;
        if (dataObject.daily_vaccinations_per_million !== undefined &&
            dataObject.daily_vaccinations_per_million > 0)
            this.daily_vaccinations_per_million = dataObject.daily_vaccinations_per_million;   
    }

    isEmpty = () : boolean => {
        return (
            this.location === "" &&
            this.iso_code === "" &&
            this.date === null &&
            this.total_vaccinations === 0 &&
            this.people_vaccinated === 0 &&
            this.people_fully_vaccinated === 0 &&
            this.daily_vaccinations_raw === 0 &&
            this.daily_vaccinations === 0 &&
            this.total_vaccinations_per_hundred === 0 &&
            this.people_vaccinated_per_hundred === 0 &&
            this.people_fully_vaccinated_per_hundred === 0 &&
            this.daily_vaccinations_per_million === 0
        );
    }
};

