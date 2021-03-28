import axios from 'axios';
import { DataPointObject } from './DataPointObjectInterface';

const getData = async () => {
    const url : string = "https://raw.githubusercontent.com/omarASC5/covid-19-data/master/public/data/vaccinations/vaccinations.csv";
    const result = await axios.get(url);
    const data : string = result.data;
    const dataByRows : Array<String> = data.split("\n").slice(1);
    const arrayOfDataPoints : Array<DataPointObject> = dataByRows.map(row => {
        const [location, iso_code, date, total_vaccinations,
            people_vaccinated, people_fully_vaccinated,
            daily_vaccinations_raw, daily_vaccinations,
            total_vaccinations_per_hundred,
            people_vaccinated_per_hundred,
            people_fully_vaccinated_per_hundred,
            daily_vaccinations_per_million] = row.split(",");
        let date_datetype_or_null : Date | null = new Date(date);
        if (date_datetype_or_null.toString() === "Invalid Date") {
            date_datetype_or_null = null;
        }

        let total_vaccinations_int : number = parseInt(total_vaccinations);

        if (isNaN(total_vaccinations_int)) {
            total_vaccinations_int = 0;
        }
        let people_vaccinated_int : number = parseInt(people_vaccinated);
        if (isNaN(people_vaccinated_int)) {
            people_vaccinated_int = 0;
        }
        let people_fully_vaccinated_int : number = parseInt(people_fully_vaccinated);
        if (isNaN(people_fully_vaccinated_int)) {
            people_fully_vaccinated_int = 0;
        }
        let daily_vaccinations_raw_int : number = parseInt(daily_vaccinations_raw);
        if (isNaN(daily_vaccinations_raw_int)) {
            daily_vaccinations_raw_int = 0;
        }
        let daily_vaccinations_int : number = parseInt(daily_vaccinations);
        if (isNaN(daily_vaccinations_int)) {
            daily_vaccinations_int = 0;
        }
        let total_vaccinations_per_hundred_int : number = parseInt(total_vaccinations_per_hundred);
        if (isNaN(total_vaccinations_per_hundred_int)) {
            total_vaccinations_per_hundred_int = 0;
        }
        let people_vaccinated_per_hundred_int : number = parseInt(people_vaccinated_per_hundred);
        if (isNaN(people_vaccinated_per_hundred_int)) {
            people_vaccinated_per_hundred_int = 0;
        }
        let people_fully_vaccinated_per_hundred_int : number = parseInt(people_fully_vaccinated_per_hundred);
        if (isNaN(people_fully_vaccinated_per_hundred_int)) {
            people_fully_vaccinated_per_hundred_int = 0;
        }
        let daily_vaccinations_per_million_int : number = parseInt(daily_vaccinations_per_million);
        if (isNaN(daily_vaccinations_per_million_int)) {
            daily_vaccinations_per_million_int = 0;
        }
        const dataPoint : DataPointObject = {
            location: location,
            iso_code: iso_code,
            date: date_datetype_or_null,
            total_vaccinations: total_vaccinations_int,
            people_vaccinated: people_vaccinated_int,
            people_fully_vaccinated: people_fully_vaccinated_int,
            daily_vaccinations_raw: daily_vaccinations_raw_int,
            daily_vaccinations: daily_vaccinations_int,
            total_vaccinations_per_hundred: total_vaccinations_per_hundred_int,
            people_vaccinated_per_hundred: people_vaccinated_per_hundred_int,
            people_fully_vaccinated_per_hundred: people_fully_vaccinated_per_hundred_int,
            daily_vaccinations_per_million: daily_vaccinations_per_million_int
        };
        return dataPoint;
    });
    return arrayOfDataPoints;
}

export default getData;