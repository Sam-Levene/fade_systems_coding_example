# Fade Systems Coding Example

## Description  
This repository contains my answer to the technical task for Fade Systems

## Installation Instructions  

1. **Clone this repository**  
   ```sh
   git clone https://github.com/Sam-Levene/fade_systems_coding_example.git
   ```
2. **Navigate to the project folder**  
   ```sh
   cd fade_systems_coding_example
   ```
3. **Install dependencies using Node Package Manager (NPM)**  
   - **Windows users:** Install using `fnm`
   ```pwsh
    fnm env --use-on-cd | Out-String | Invoke-expression
    fnm use 22
    npm install
    npx playwright install
   ```
   - **Mac users:** Install using `brew`  
   ```sh
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   brew install node
   npm install
   npx playwright install
   ```
   - **Linux users:** Install using `nvm`
   (Note: Please note that you need to restart your terminal for nvm to become active.)
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   nvm install node
   npm install
   npx playwright install
   ```

## Usage
***NOTE: Some systems may vary in how the script is setup in the `package.json` file; I am using a Windows machine to try this out on; but I know that using the escaped quotes aren't neccesary in Mac machines. If you are having issues, check the script quotations***

### Run all scenarios
1. Navigate to the project root (`cd fade_systems_coding_example`) and execute:
 ```npm run automate```
This runs tests in browser mode, for headless, set `headless: true` in features/step_definitions/common-hooks.ts and rerun the command.

### Run a single scenario
1. Find a scenario to test locally and add the `@Test` tag against it

e.g.
``` 
   @JIRA-123 @Test
    Scenario: [SCENARIO-NAME]
        Given ...
        When ...
        Then ...
```
2. Navigate to the project root (`cd fade_systems_coding_example`) and execute:
 ```npm run test```
 This runs tests in browser mode, for headless, set `headless: true` in features/step_definitions/common-hooks.ts and rerun the command.

## Dependencies

This project requires a few node packages that are installed when you run the command `npm install`; if this fails, then a package didn't get installed correctly. Try deleting the `node_packages` folder and retrying the command.

## Contributing

Contributions via pull requests are welcome. For substantial changes, please open an issue to discuss before proceeding. Ensure that the tests are updated as necessary.

## License

[MIT](https://choosealicense.com/licenses/mit/)