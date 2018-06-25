declare let gtag: any;

export function getList(
	phrase: string,
	curvedPhrases: string[],
	straightPhrases: string[]
): string[] {
	let firstLetter: string = phrase.charAt(0).toUpperCase();
	let isCurved: boolean = CURVED.includes(firstLetter);
	let isStraight: boolean = STRAIGHT.includes(firstLetter);

	gtag('event', 'generate_list', {
		event_label: 'sent_word_' + (isCurved ? 'curved' : 'straight')
	});

	// if the first letter is curved, the rest of the words should be straight,
	// and vice versa
	if (isCurved) {
		return generateList(phrase, straightPhrases);
	} else if (isStraight) {
		return generateList(phrase, curvedPhrases);
	} else {
		alert('You have entered an invalid brand.');
		window.location.reload();
	}
}

function generateList(phrase: string, list: string[]): string[] {
	let indexes: number[] = [];
	while (indexes.length < LIST_LEN - 1) {
		let rand = Math.floor(Math.random() * list.length);
		if (indexes.indexOf(rand) > -1) continue;
		indexes[indexes.length] = rand;
	}

	let res: string[] = [];
	res.push(phrase);
	for (let index of indexes) {
		res.push(list[index]);
	}

	shuffleArray(res);

	return res;
}

// https://stackoverflow.com/a/12646864
function shuffleArray(array: any[]): void {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

const LIST_LEN = 8;

const CURVED: string[] = [
	'B',
	'C',
	'D',
	'G',
	'J',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'U'
];

const STRAIGHT: string[] = [
	'A',
	'E',
	'F',
	'H',
	'I',
	'K',
	'L',
	'M',
	'N',
	'T',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];
