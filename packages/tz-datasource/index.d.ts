/**
 * Format: IANA zone name, abbreviation, offset, is DST
 */
export type TzEntry = [string, string, number, boolean];
export interface TzDataSource {
	[key: string]: TzEntry[];
}
export interface TzLazyDataSource {
	readonly [key: string]: TzEntry[];
}

/**
 * Creates a lazy data source objects that generates data per time-zone when the zone is accessed.
 * The year data range defines the historical and future transition range. For example, a 10-year range would
 * result in data for 5 years in the past and 5 years in the present.
 *
 * @param yearDataRange The year range to generate the time-zone data for.
 * @returns An object that contains getters for each time-zone.
 */
export declare const createTzDataSource: (yearDataRange: number) => TzLazyDataSource;
