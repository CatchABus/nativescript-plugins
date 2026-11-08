import { Trace, Utils } from '@nativescript/core';
import type { createTzDataSource as createTzDataSourceDefinition, TzDataSource, TzLazyDataSource } from '.';
import { defineTimeZoneGetter } from './common';

export const createTzDataSource: typeof createTzDataSourceDefinition = (yearDataRange: number) => {
	const dataSource: TzLazyDataSource = {};

	if (Utils.SDK_VERSION < 26) {
		Trace.write('The tz-datasource plugin is functional for sdk 26 and above', Trace.categories.Error, Trace.messageType.error);
		return dataSource;
	}

	const cachedData: TzDataSource = {};
	const nativeZoneIds = com.nativescript.tzdatasource.NSTzDataSource.getAvailableZoneIds();
	const jsonCb = (tz: string) => com.nativescript.tzdatasource.NSTzDataSource.generateTimeZoneData(tz, yearDataRange);

	for (let i = 0, len = nativeZoneIds.length; i < len; i++) {
		defineTimeZoneGetter(nativeZoneIds[i], dataSource, cachedData, jsonCb);
	}

	return dataSource;
};
