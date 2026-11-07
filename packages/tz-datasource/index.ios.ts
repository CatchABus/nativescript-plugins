import { Trace } from '@nativescript/core';
import type { createTzDataSource as createTzDataSourceDefinition, TzDataSource, TzLazyDataSource } from '.';

export const createTzDataSource: typeof createTzDataSourceDefinition = (yearDataRange: number) => {
	const dataSource: TzLazyDataSource = {};
	const cachedData: TzDataSource = {};
	const nativeZoneIds = NSTimeZone.knownTimeZoneNames;

	for (let i = 0, len = nativeZoneIds.count; i < len; i++) {
		const tz = nativeZoneIds[i];
		if (tz === 'UTC') {
			continue;
		}

		Object.defineProperty(dataSource, tz, {
			get() {
				if (cachedData[tz] == null) {
					const jsonStr = NSTzDataSource.generateTimeZoneData(tz, yearDataRange);
					if (jsonStr != null) {
						cachedData[tz] = JSON.parse(jsonStr);
					} else {
						Trace.write(`Failed to find data for the specified timezone and range: ${tz}, ${yearDataRange} years`, Trace.categories.Error, Trace.messageType.error);
					}
				}
				return cachedData[tz];
			},
			set(_val) {},
			enumerable: true,
		});
	}

	return dataSource;
};
