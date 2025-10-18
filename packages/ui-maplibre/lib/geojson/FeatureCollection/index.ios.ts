import { Feature } from '../Feature';
import { FeatureCollectionCommon } from './common';

export class FeatureCollection extends FeatureCollectionCommon<MLNShapeCollectionFeature> {
	private mFeatures: readonly Feature[];

	constructor(content: Feature | Feature[] | string) {
		super(content);
	}
	public override initNative(content: Feature | Feature[] | string): MLNShapeCollectionFeature {
		let native: MLNShapeCollectionFeature;

		if (typeof content === 'string') {
			const jsonData = NSString.stringWithString(content).dataUsingEncoding(NSUTF8StringEncoding);
			const nativeShape = MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);

			native = nativeShape instanceof MLNShapeCollectionFeature ? nativeShape : null;
		} else {
			let nativeFeatures: NSMutableArray<MLNFeature>;

			if (Array.isArray(content)) {
				const length = content.length;
				nativeFeatures = NSMutableArray.arrayWithCapacity<MLNFeature>(length);

				for (let i = 0; i < length; i++) {
					nativeFeatures.addObject(content[i].native);
				}
			} else {
				nativeFeatures = NSMutableArray.arrayWithCapacity<MLNFeature>(1);
				nativeFeatures.addObject(content.native);
			}

			native = MLNShapeCollectionFeature.shapeCollectionWithShapes(nativeFeatures);
		}
		return native;
	}

	public override get features(): readonly Feature[] {
		if (!this.mFeatures) {
			const nFeatures = this.native.shapes;
			const arr: Feature[] = [];

			for (let i = 0, length = nFeatures.count; i < length; i++) {
				arr.push(Feature.initWithNative(nFeatures.objectAtIndex(i)) as Feature);
			}

			this.mFeatures = Object.freeze(arr);
		}
		return this.mFeatures;
	}
}
