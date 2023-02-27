/**
 * Generate a JSON file.
 * @param {object} jsonContents A JSON object.
 * @returns {Blob} The JSON file.
 * @link https://github.com/tomdevisser/tomdevisser-theme/blob/main/src/js/utils.js
 */
const generateJsonFile = (jsonContents) => {
	return new Blob([JSON.stringify(jsonContents, null, 2)], {
		type: "application/json",
	});
};

/**
 * Download a file.
 * @param {Blob} file The file to download.
 * @param {string} filename The name of the file.
 * @link https://github.com/tomdevisser/tomdevisser-theme/blob/main/src/js/utils.js
 */
const downloadFile = (file, filename) => {
	const fileLink = document.createElement("a");
	fileLink.href = URL.createObjectURL(file);
	fileLink.download = filename;
	fileLink.click();
};
