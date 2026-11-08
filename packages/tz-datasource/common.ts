import { Trace } from '@nativescript/core';
import type { createTzDataSource as createTzDataSourceDefinition, TzDataSource, TzLazyDataSource } from '.';

export const createTzDataSource: typeof createTzDataSourceDefinition = (_yearDataRange: number) => {
	return null;
};

export function defineTimeZoneGetter(tz: string, dataSource: TzLazyDataSource, cache: TzDataSource, jsonCb: (tz: string) => string) {
	if (tz === 'UTC') {
		return;
	}

	Object.defineProperty(dataSource, tz, {
		get() {
			if (cache[tz] == null) {
				const jsonStr = jsonCb(tz);
				if (jsonStr != null) {
					const data = JSON.parse(jsonStr);

					// Make sure first transition covers the distant past
					if (Array.isArray(data) && data.length > 0) {
						data[0][0] = -Infinity;
					}
					cache[tz] = data;
				} else {
					Trace.write(`Failed to find data for timezone: ${tz}`, Trace.categories.Error, Trace.messageType.error);
				}
			}
			return cache[tz];
		},
		set(_val) {},
		enumerable: true,
	});
}
