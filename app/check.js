'use strict';
const isEmpty = str => str.replace(/^\s+|\s+$/gm, '').length == 0;
const hasLength = (input) => input.length !== 0;
const atLeast8 = input => input.length >= 8;
const atMost64 = input => input.length <= 64;
const isASCII = input => /^[\x00-\x7F]*$/.test(input);

const getFullWord = (index, haystack) => {
	const getRightSideWord = (index, haystack) => {
		let full_word = '';
		const max_word_length_index = index + 100;
		for (index; index < max_word_length_index; index++) {
			let char = haystack.charAt(index);
			if (isEmpty(char)) {
				return full_word;
			} else {
				full_word = full_word + char;
			}
		}
		return full_word;
	};

	const getLeftSideWord = (index, haystack) => {
		let full_word = '';
		let i = index - 1;
		const max_word_length_index = index - 100;
		for (i; index > max_word_length_index; i--) {
			let char = haystack.charAt(i);
			if (isEmpty(char)) {
				return full_word;
			} else {
				full_word = char + full_word;
			}
		}
		return full_word;
	};

	return getLeftSideWord(index, haystack) + getRightSideWord(index, haystack);
};

const isUnique = (needle, haystack) => {
	if (haystack.includes(needle)) {
		//basic includes doesnt protect against 99999frbnzy (actual is 999999999frbnzy)
		//check if needle is a substring of a bigger word

		var index = haystack.indexOf(needle);
		while (index !== -1) {

			//get word
			let full_word = getFullWord(index, haystack);

			if (needle == full_word) {
				return false;
			}

			//check all occurrences that this may be a substring of
			//goes to the next occurrence
			index = haystack.indexOf(needle, index + 1);
		}
	}

	return true;
};

function check(passwords) {
	var button = document.getElementById('button');

	button.onclick = function() {
		var password = document.getElementById('password_field').value;

		if (hasLength(password)) {
			if (atLeast8(password)) {
				if (atMost64(password)) {
					if (isASCII(password)) {
						if (
							isUnique(password, passwords)
						) {
							alert('Nice Password');
						} else {
							alert(
								'Password is a common password. Use a stronger password'
							);
						}
					} else {
						alert(
							'Password must be only ASCII characters and spaces'
						);
					}
				} else {
					alert('Password exceeds maximum length of 64 characters');
				}
			} else {
				alert('Password must have a minimum length of 8 characters');
			}
		}
	};
}

async function fetchPws() {
	const response = await fetch('http://localhost:3000/passwords');
	const passwords = await response.text();
	// TODO: parse and store passwords.

	if (passwords) {
		check(passwords);
	}
	else {
		alert('Could not load passwords. Cannot proceed at this time. :( ');
	}
}

fetchPws();

var exports = (module.exports = {});
exports.hasLength = hasLength;
exports.atLeast8 = atLeast8;
exports.isUnique = isUnique;
exports.isEmpty = isEmpty;
exports.atMost64 = atMost64;
exports.isASCII = isASCII;
exports.getFullWord = getFullWord;