interface IDOMPoint {
	x: number;
	y: number;
	z: number;
	w: number;
}

class NSDOMPoint implements IDOMPoint {
	public x: number = 0;
	public y: number = 0;
	public z: number = 0;
	public w: number = 1;

	static fromPoint(sourcePoint: NSDOMPoint | IDOMPoint) {
		const point = new NSDOMPoint();
		point.x = sourcePoint.x;
		point.y = sourcePoint.y;
		point.z = sourcePoint.z;
		point.w = sourcePoint.w;

		return point;
	}
}

export { NSDOMPoint as DOMPoint };
