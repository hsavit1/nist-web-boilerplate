const check = require('../app/check.js');
const assert = require('assert');

const sample_words = "99ariA9r 99aria99 99accord 99a99s99 999xxx 999ooo999 999gfx 999con 999az999 99999z 99999d 999999z 999999o 999999d 999999999frbnzy 9999996 99999934 999995 999988445 9999666 99992222 9999122097 999876 9997 99966 999641146999 999555111";

describe('Testing the length function', function() {
	it('Should pass if given a string of some length', function() {
		assert.equal(true, check.hasLength('12345678'));
	});
});

describe('Testing the length function', function() {
	it('Should fail if given a string of no length', function() {
		assert.equal(false, check.hasLength(''));
	});
});

describe('Testing the at least 8 chars function', function() {
	it('Should pass if given a string of 8 characters', function() {
		assert.equal(true, check.atLeast8('12345678'));
	});
});

describe('Testing the at least 8 chars function', function() {
	it('Should fail if given a string of 4 characters', function() {
		assert.equal(false, check.atLeast8('1234'));
	});
});

describe('Testing the at most 64 chars function', function() {
	it('Should pass if given a string of 64 characters', function() {
		assert.equal(true, check.atMost64('8888888888888888888888888888888888888888888888888888888888888888'));
	});
});

describe('Testing the at most 64 chars function', function() {
	it('Should fail if given a string of 1000 characters', function() {
		assert.equal(false, check.atMost64('888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888'));
	});
});

describe('Testing the ASCII function', function() {
	it('Should pass if given a string that contains ascii characters', function() {
assert.equal(true, check.isASCII('kjahw1234586791353134091+_"L></.,~fbkafhi34fhaifgakef lakfalwkfhalO&*#$@#&*$O@$&P^%@Q,ahA a,'));
	});
});

describe('Testing the ASCII function', function() {
	it('Should fail if given a string that contains non-ascii characters', function() {
		assert.equal(false, check.isASCII('ابتابتابتابتaerfaerfa'));
	});
});

describe('Testing the getFullWordFunction', function() {
	it('Given the starting index of a string that is included in a bigger string, return that bigger string', function() {
assert.equal('abcdef123456ghijk', check.getFullWord(25, 'wrtglwnrg;lwr abcdef123456ghijk ;wlrtgn;wrlgn w;tlgk;wrtg wr;tlgk'));
	});
});

describe('Testing the isUnique function', function() {
	it('Should fail if the string is found in a list of common strings', function() {
		assert.equal(false, check.isUnique('999999d', sample_words, '99aria99', '999555111'));
	});
});

describe('Testing the isUnique function', function() {
	it('Should pass if the string is not in a list of common strings', function() {
		assert.equal(true, check.isUnique('aerfaerfaerfa', sample_words));
	});
});

describe('Testing the isUnique function', function() {
	it('Should pass if the string is a unique string but also a substring of a bigger string in a list of common strings', function() {
		assert.equal(true, check.isUnique('999999frbnzy', sample_words));
	});
});

describe('Testing the isUnique function', function() {
	it('Should pass if the word contains the same characters as a different word but different capitalization', function() {
		assert.equal(false, check.isUnique('99ariA9r', sample_words));
	});
});

describe('Testing all scenarios', function() {
	it('Should pass if string fulfills all the requirements', function() {

        const word = 'kjrfnlknflkj';
        const result = check.atLeast8(word) && check.atMost64(word) && check.isASCII(word) && check.isUnique(word, sample_words); 

		assert.equal(true, result);
	});
});

describe('Testing all scenarios', function() {
	it('Should pass even if user inputs a word, that has a space in the middle, and resembles 2 adjacent words in the big list of words', function() {

        const word = '99accord 99a99s99';
        const result = check.atLeast8(word) && check.atMost64(word) && check.isASCII(word) && check.isUnique(word, sample_words); 

		assert.equal(true, result);
	});
});

