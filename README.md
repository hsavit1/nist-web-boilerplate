# June 2017 NIST Password Validator
This project contains a NIST June 2017 compliant password validator. This checks an inputted password against a list of a million commonly used passwords, along with a few other validation requirements, and tells you if the password is valid.

# Background

[NIST](https://www.nist.gov/) recently updates their [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) in June 2017.
The new guidelines specify general rules for handling the security of user supplied passwords.
Previously passwords were suggested to have certain composition rules (special characters, numbers, etc), hints and expiration times.
Those have gone out the window and the new suggestions are as follows:

Passwords MUST

1. Have an 8 character minimum
2. AT MOST a 64 character maximum
2. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

## How this works
A server.js file serves a file called pw.txt, which contains the big list of common passwords. The check.js file in the app directory is linked from the index.html file, and contains the password validation solution, which works entirely on the client side. 

## Running the local server

### System Requirements

* node v8.10.0+
* npm v5.0.0+

### Run

```
npm install
node server.js // bootup server
```

Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.

### Run the Tests

```
npm install
npm test //run the test suite
```