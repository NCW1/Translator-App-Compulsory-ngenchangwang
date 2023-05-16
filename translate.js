// 3 languages to choose from
const translations = {
	// Malay
	"malay": {
		// Malay to English
		"english": {
			"pagi": "morning"
		},
		// Malay to Spanish
		"spanish": {
			"pagi": "mañana"
		},
		// Malay to Malay
		"malay": {
			"pagi": "Same language detected!"
		}
	},
	// English
	"english": {
		// English to Malay
		"malay": {
			"morning": "pagi"
		},
		// English to Spanish
		"spanish": {
			"morning": "mañana"
		},
		// English to English
		"english": {
			"morning": "Same language detected!"
		}
	},
	// Spanish
	"spanish": {
		// Spanish to Malay
		"malay": {
			"mañana": "pagi"
		},
		// Spanish to English
		"english": {
			"mañana": "morning"
		},
		// Spanish to Spanish
		"spanish": {
			"mañana": "Same language detected!"
		}
	}
};

export function translate(sourceLanguage, targetLanguage, inputText) {
	const translatedWord = translations[sourceLanguage][targetLanguage][inputText];

	if (translatedWord) {
		return translatedWord;
	}
	else {
		return 'Word is not found!';
	}
}