import type { createTzDataSource as createTzDataSourceDefinition, TzDataSource, TzLazyDataSource } from '.';
import { defineTimeZoneGetter } from './common';

export const createTzDataSource: typeof createTzDataSourceDefinition = (yearDataRange: number) => {
	const dataSource: TzLazyDataSource = {};
	const cachedData: TzDataSource = {};
	const nativeZoneIds = NSTimeZone.knownTimeZoneNames;
	const jsonCb = (tz: string) => NSTzDataSource.generateTimeZoneData(tz, yearDataRange);

	for (let i = 0, len = nativeZoneIds.count; i < len; i++) {
		defineTimeZoneGetter(nativeZoneIds[i], dataSource, cachedData, jsonCb);
	}

	return dataSource;
};
