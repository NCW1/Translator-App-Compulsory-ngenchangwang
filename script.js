import { translate } from './translate.js';

function translateText() {
	const sourceText = document.getElementById("sourceText").value;
	const sourceLanguage = document.getElementById("sourceLanguage").value;
	const targetLanguage = document.getElementById("targetLanguage").value;

	const translated = translate(sourceLanguage, targetLanguage, sourceText);

	document.getElementById("translatedText").value = translated;
}

window.translateText = translateText;