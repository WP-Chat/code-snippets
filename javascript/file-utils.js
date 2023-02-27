/**
 * Generate a JSON file.
 * @param {object} jsonContents A JSON object.
 * @returns {Blob} The JSON file.
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
 */
const downloadFile = (file, filename) => {
	const fileLink = document.createElement("a");
	fileLink.href = URL.createObjectURL(file);
	fileLink.download = filename;
	fileLink.click();
};
