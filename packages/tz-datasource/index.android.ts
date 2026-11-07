import { Trace, Utils } from '@nativescript/core';
import type { createTzDataSource as createTzDataSourceDefinition, TzDataSource, TzLazyDataSource } from '.';

export const createTzDataSource: typeof createTzDataSourceDefinition = (yearDataRange: number) => {
	const dataSource: TzLazyDataSource = {};

	if (Utils.SDK_VERSION < 26) {
		Trace.write('The tz-datasource plugin is functional for sdk 26 and above', Trace.categories.Error, Trace.messageType.error);
		return dataSource;
	}

	const cachedData: TzDataSource = {};
	const nativeZoneIds = com.nativescript.tzdatasource.NSTzDataSource.getAvailableZoneIds();

	for (let i = 0, len = nativeZoneIds.length; i < len; i++) {
		const tz = nativeZoneIds[i];
		if (tz === 'UTC') {
			continue;
		}

		Object.defineProperty(dataSource, tz, {
			get() {
				if (cachedData[tz] == null) {
					const jsonStr = com.nativescript.tzdatasource.NSTzDataSource.generateTimeZoneData(tz, yearDataRange);
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
