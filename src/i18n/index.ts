import english from "./en.json";
import spanish from "./es.json";
import portuguese from "./pt.json";

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
	PORTUGUESE: 'pt',
};

export const getI18N = ({ currentLocale = 'en',}: {currentLocale: string | undefined }) => {
	if (currentLocale === LANG.SPANISH) return {...english,...spanish};
	if (currentLocale === LANG.PORTUGUESE) return {...english,...portuguese};
	return english;
};