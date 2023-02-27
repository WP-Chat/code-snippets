/**
 * Create a DOM element.
 * @param {object} options The options to create the element.
 * @returns {HTMLElement} The DOM element.
 * @link https://github.com/tomdevisser/tomdevisser-theme/blob/main/src/js/utils.js
 */
const createDOMElement = (options) => {
	const { type, classes, attributes, innerHTML, children } = options;
	const element = document.createElement(type);

	if (classes) {
		for (const className of classes) {
			element.classList.add(className);
		}
	}

	if (attributes) {
		for (const [key, value] of Object.entries(attributes)) {
			element.setAttribute(key, value);
		}
	}

	if (innerHTML) {
		element.innerHTML = innerHTML;
	}

	if (children) {
		for (const child of children) {
			element.appendChild(child);
		}
	}

	return element;
};
