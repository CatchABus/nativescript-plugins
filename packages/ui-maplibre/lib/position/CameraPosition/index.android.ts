import { Utils } from '@nativescript/core';
import { IRect } from '../IRect';
import { LatLng } from '../LatLng';
import { CameraPositionCommon } from './common';

export class CameraPosition extends CameraPositionCommon<org.maplibre.android.camera.CameraPosition> {
	public override initNative(target?: LatLng, zoom?: number, tilt?: number, bearing?: number, padding?: IRect | number): org.maplibre.android.camera.CameraPosition {
		let nativeBulder = new org.maplibre.android.camera.CameraPosition.Builder();

		if (target) {
			nativeBulder = nativeBulder.target(target.native);
		}

		if (zoom != null) {
			nativeBulder = nativeBulder.zoom(zoom);
		}

		if (tilt != null) {
			nativeBulder = nativeBulder.tilt(tilt);
		}

		if (bearing != null) {
			nativeBulder = nativeBulder.bearing(bearing);
		}

		if (padding != null) {
			let paddingLeft: number;
			let paddingTop: number;
			let paddingRight: number;
			let paddingBottom: number;

			if (typeof padding === 'number') {
				const value = Utils.layout.toDevicePixels(padding);
				paddingLeft = value;
				paddingTop = value;
				paddingRight = value;
				paddingBottom = value;
			} else {
				paddingLeft = Utils.layout.toDevicePixels(padding.left);
				paddingTop = Utils.layout.toDevicePixels(padding.top);
				paddingRight = Utils.layout.toDevicePixels(padding.right);
				paddingBottom = Utils.layout.toDevicePixels(padding.bottom);
			}

			nativeBulder = nativeBulder.padding(paddingLeft, paddingTop, paddingRight, paddingBottom);
		}

		return nativeBulder.build();
	}

	public override get zoom(): number {
		return this.native.zoom;
	}

	public override get tilt(): number {
		return this.native.tilt;
	}

	public override get heading(): number {
		return this.native.bearing;
	}

	public override get padding(): IRect {
		const nativePaddings = this.native.padding;

		return {
			left: nativePaddings[0],
			top: nativePaddings[1],
			right: nativePaddings[2],
			bottom: nativePaddings[3],
		};
	}
}
