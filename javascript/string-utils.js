/**
 * Slugify a string.
 * @param {string} string The string to slugify.
 * @returns {string} The slugified string.
 * @link https://github.com/tomdevisser/tomdevisser-theme/blob/main/src/js/utils.js
 */
const slugifyString = (string) => {
	return string
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
};
