import { EventData, Page } from '@nativescript/core';
import { DFUInitiator, DfuProgressEventData, DfuState, DfuStateChangedEventData } from '@nativescript-community/nordic-dfu';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function startDFU(args: EventData) {
	const myDeviceUUID = 'a string representation of UUID/address';
	const filePath = '/test/file.zip';
	const initiator = new DFUInitiator(myDeviceUUID);

	initiator.on('DFUStateChanged', (args: DfuStateChangedEventData) => {
		console.log('DFU state:' + args.state);
		if (args.state === DfuState.DFU_FAILED) {
			console.log(args.reason);
		}
	});

	initiator.on('DFUProgress', (args: DfuProgressEventData) => {
		console.log(`Progress: ${args.percent}%`);
	});

	console.log('Starting DFU...');

	try {
		const controller = initiator.start(filePath);
	} catch (err) {
		console.error(err);
	}
}
