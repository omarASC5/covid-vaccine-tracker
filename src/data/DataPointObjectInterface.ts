export interface DataPointObject {
    location?: string;
    iso_code?: string;
    date?: Date | null;
    total_vaccinations?: number;
    people_vaccinated?: number;
    people_fully_vaccinated?: number;
    daily_vaccinations_raw?: number;
    daily_vaccinations?: number;
    total_vaccinations_per_hundred?: number;
    people_vaccinated_per_hundred?: number;
    people_fully_vaccinated_per_hundred?: number;
    daily_vaccinations_per_million?: number;
};