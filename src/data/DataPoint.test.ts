import { DataPoint } from './DataPoint';
import { DataPointObject } from './DataPointObjectInterface';

describe("DataPoint Tests", () => {
    it("should initialize an empty data point", () => {
        let dataObject : DataPointObject = {};
        let dataPoint: DataPoint = new DataPoint(dataObject);
        expect(dataPoint.isEmpty()).toBe(true);
    });

    it("should return a new DataPoint with" +
        " a single property - country", () => {
        let dataObject : DataPointObject = {
            location: "USA"
        };
        let dataPoint: DataPoint = new DataPoint(dataObject);
        expect(dataPoint.location).toBe("USA");
    });

    it("should return a new DataPoint" +
        " with no country but an iso code", () => {
        let dataObject : DataPointObject = {
            iso_code: "1234"
        };

        let dataPoint: DataPoint = new DataPoint(dataObject);
        expect(dataPoint.iso_code).toBe("1234");
        expect(dataPoint.location).toBe("");
    });

    it("should return a new DataPoint with 5 filled in fields", () => {
        let dateObj : Date = new Date();
        let dataObject : DataPointObject = {
            location: "USA",
            date: dateObj,
            daily_vaccinations: 10,
            daily_vaccinations_per_million: 100,
            total_vaccinations_per_hundred: 50
        }
        let dataPoint : DataPoint = new DataPoint(dataObject);
        expect(dataPoint.location).toBe("USA");
        expect(dataPoint.date).toBe(dateObj);
        expect(dataPoint.daily_vaccinations).toBe(10);
        expect(dataPoint.daily_vaccinations_per_million).toBe(100);
        expect(dataPoint.total_vaccinations_per_hundred).toBe(50);
    });

    it("should return a new DataPoint with all filled in fields", () => {
        let dateObj : Date = new Date();
        let dataObject : DataPointObject = {
            location: "ALB",
            date: dateObj,
            iso_code: "1234",
            total_vaccinations: -5,
            people_vaccinated: 0,
            people_fully_vaccinated: 50,
            daily_vaccinations_raw: 123,
            daily_vaccinations: 1024,
            total_vaccinations_per_hundred: 100000000,
            people_vaccinated_per_hundred: 564565767,
            people_fully_vaccinated_per_hundred: 124343,
            daily_vaccinations_per_million: 1
        }
        let dataPoint : DataPoint = new DataPoint(dataObject);
        expect(dataPoint.location).toBe("ALB");
        expect(dataPoint.date).toBe(dateObj);
        expect(dataPoint.iso_code).toBe("1234");
        expect(dataPoint.total_vaccinations).toBe(0);
        expect(dataPoint.people_vaccinated).toBe(0);
        expect(dataPoint.people_fully_vaccinated).toBe(50);
        expect(dataPoint.daily_vaccinations_raw).toBe(123);
        expect(dataPoint.daily_vaccinations).toBe(1024);
        expect(dataPoint.total_vaccinations_per_hundred).toBe(100000000);
        expect(dataPoint.people_vaccinated_per_hundred).toBe(564565767);
        expect(dataPoint.people_fully_vaccinated_per_hundred).toBe(124343);
        expect(dataPoint.daily_vaccinations_per_million).toBe(1);
    });

    test("a DataPoint with negative numerical values returned in place of zeroes", () => {
        let dataObject : DataPointObject = {
            total_vaccinations: -5,
            people_vaccinated: -100,
            people_fully_vaccinated: -1000,
            daily_vaccinations_raw: -10000,
            daily_vaccinations: -1000000,
            total_vaccinations_per_hundred: -1,
            people_vaccinated_per_hundred: -1000000000,
            people_fully_vaccinated_per_hundred: -100000000000,
            daily_vaccinations_per_million: -100000000000000000
        }
        let dataPoint : DataPoint = new DataPoint(dataObject);
        expect(dataPoint.total_vaccinations).toBe(0);
        expect(dataPoint.people_vaccinated).toBe(0);
        expect(dataPoint.people_fully_vaccinated).toBe(0);
        expect(dataPoint.daily_vaccinations_raw).toBe(0);
        expect(dataPoint.daily_vaccinations).toBe(0);
        expect(dataPoint.total_vaccinations_per_hundred).toBe(0);
        expect(dataPoint.people_vaccinated_per_hundred).toBe(0);
        expect(dataPoint.people_fully_vaccinated_per_hundred).toBe(0);
        expect(dataPoint.daily_vaccinations_per_million).toBe(0);
    });
});