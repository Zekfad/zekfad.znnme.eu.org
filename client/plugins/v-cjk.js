import Vue from 'vue';

const blocks = [
	'\u1100-\u11ff', // Hangul Jamo
	'\u2e80-\u2eff', // CJK Radicals Supplement
	'\u2f00-\u2fdf', // Kangxi Radicals
	'\u2ff0-\u2fff', // Ideographic Description Characters
	'\u3000-\u303f', // CJK Symbols and Punctuation
	'\u3040-\u309f', // Hiragana
	'\u30a0-\u30ff', // Katakana
	'\u3100-\u312f', // Bopomofo
	'\u3130-\u318f', // Hangul Compatibility Jamo
	'\u3190-\u319f', // Kanbun
	'\u31a0-\u31bf', // Bopomofo Extended
	'\u31c0-\u31ef', // CJK Strokes
	'\u31f0-\u31ff', // Katakana Phonetic Extensions
	'\u3200-\u32ff', // Enclosed CJK Letters and Months
	'\u3300-\u33ff', // CJK Compatibility
	'\u3400-\u4dbf', // CJK Unified Ideographs Extension A
	'\u4e00-\u9fff', // CJK Unified Ideographs
	'\ua960-\ua97f', // Hangul Jamo Extended-A
	'\uac00-\ud7af', // Hangul Syllables
	'\ud7b0-\ud7ff', // Hangul Jamo Extended-B
	'\uf900-\ufaff', // CJK Compatibility Ideographs
	'\ufb00-\ufb4f', // Alphabetic Presentation Forms
	'\ufe10-\ufe1f', // Vertical Forms
	'\ufe30-\ufe4f', // CJK Compatibility Forms
	'\ufe50-\ufe6f', // Small Form Variants
	'\uff00-\uffef', // Halfwidth and Fullwidth Forms
	'\u{1f200}-\u{1f2ff}', // Enclosed Ideographic Supplement
	'\u{20000}-\u{2a6df}', // CJK Unified Ideographs Extension B
	'\u{2a700}-\u{2b73f}', // CJK Unified Ideographs Extension C
	'\u{2b740}-\u{2b81f}', // CJK Unified Ideographs Extension D
	'\u{2b820}-\u{2ceaf}', // CJK Unified Ideographs Extension E
	'\u{2f800}-\u{2fa1f}', // CJK Compatibility Ideographs Supplement
];
let regex;

try {
	regex = RegExp(`[${
		blocks
			.join('')
	}]`, 'u');
} catch (error) {
	// Fallback for agents with no 'u' flag support
	regex = RegExp(`[${
		blocks
			.filter(pattern => pattern.length < 4)
			.join('')
	}]`);
}

function testRegex(element) {
	if (regex.test(element.innerText))
		element.classList.add('cjk');
}

Vue.directive('cjk', {
	inserted(element) {
		testRegex(element);
	},
	componentUpdated(element) {
		testRegex(element);
	},
});
