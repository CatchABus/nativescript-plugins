import { DemoSharedBase } from '../utils';
import { lookupDNS } from '@nativescript-community/dns-lookup';

export class DemoSharedDnsLookup extends DemoSharedBase {
	constructor() {
		super();

		this.set('hostName', 'google.com');
	}

	async testIt() {
		const hostName = this.get('hostName');

		console.log('Host name is: ' + hostName);
		this.set('ipAddresses', 'loading...');

		try {
			const addresses = await lookupDNS(hostName);
			this.set('ipAddresses', addresses.join('\n'));
		} catch (e) {
			console.error(e);
		}
	}
}
