const KEBAB_REGEX = /([A-Z])/g;

export function toKebabCase(value: string, keepLeadingDash = true) {
	if (typeof value !== 'string' || !value.length) {
		return value;
	}

	const result = value.replace(KEBAB_REGEX, (match) => `-${match.toLowerCase()}`);

	if (keepLeadingDash) {
		return result;
	}

	if (result.startsWith('-')) {
		return result.slice(1);
	}

	return result;
}
