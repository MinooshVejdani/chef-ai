export function normalizeIngredient(value) {
	if (typeof value !== "string") {
		return "";
	}

	return value.trim().toLowerCase();
}

export function isDuplicateIngredient(ingredient, list) {
	return list.includes(ingredient);
}

export function hasEnoughIngredients(list) {
	return list.length > 2;
}
