# Get started

Clone this repo to your local machine

## Setup Tester Hotel in IDE
- Clone https://github.com/rasi10/rasi10-hotel-test-vue.git repo and place it in the project directory
- Open `rasi10-hotel-test-vue` in terminal
- Command workarounds to make app install and build though it's built with deprecated versions
```
nvm use 12
npm update
```

- Install and build app
```
npm install
npm run build
```
Expected result: Directories 'node_modules' and 'dist' are created

- Run the application using the command
```
npm run start
```
Expected result: Terminal clears and show
```
TESTER HOTEL
Running on http://localhost:3000
```

### Trouble?
Try this
```
npm cache clean --force
```


## Setup cypress in IDE
Open `frontend-tests` in terminal and command
```
npm install cypress --save-dev
```
Expected result: Directory `node_modules` are created

## Run cypress in IDE
Using prepared scripts in the `package.json`-file

Run cypress via browser
```
npm run cypress:open
```

Run cypress headless with mochawesome reporter
```
npm run cypress:run
```

## Setup percy.io for visual regression testing
Roughly based on educational video `011 - Testautomatisering - Visual Regression Testing  DEMO.mp4` and information available here: https://docs.percy.io/docs/cypress
### At percy.io
- Go to percy.io and create/login
- Go to Projects > Create new project
- [Select setup guide for cypress]
- Copy token

### Install in IDE

- Open `frontend-tests` in terminal and command
```
 npm install --save-dev @percy/cli @percy/cypress
```
Expected result: Librarys are downloaded and @percy/cli and @percy/cypress are added to devDependencies in `frontend-tests/package.json`

```javascript
"devDependencies": {
    "@percy/cli": "^1.0.0-beta.70",
    "@percy/cypress": "^3.1.1",
    "cypress": "^8.7.0"
  },
```
- `package.json` should include scripts to run percy
`--spec {dir/file}` specifies which spec to be run with percy
```javascript
"scripts": {
"test:vrt": "percy exec cypress run --spec cypress/integration/percy.spec.js",
/* other scripts */
},

```
- `cypress.json` should include following line
```javascript
"chromeWebSecurity":false
```
- Go to `cypress/support/index.js` and add percy to global configuration so that you can use the `percySnapshop`-command
```javascript
// Import percy.io for visual regression testing with cypress
import '@percy/cypress'
```
- Paste token in `frontend-tests`-terminal 
```
export PERCY_TOKEN={token}
```

## Use percy for snapshots
Add command `cy.percySnapshot(['name'][, options])` to your spec.js where you'd like percy to take snapshots during cypress test run, either independently or in combination with 'click-tests'

First time you run your percy snapshots will have to be approved as `baseline image` i.e. expected visual result which later snapshots will be compared to.

Rememeber to also test your tests! Run them in the browser before running headless w/ or w/o percy. Percy will not take snapshots during browser run.

## Running percy
- Run tests in `frontend-tests`-terminal (will download/run on Chromium)
```
test:vrt
```
Expected result: Tests running headless and sending snapshots to percy project online. 

Each run is saved in a build of the project. The buld view infos time, branch, no. of snapshots, changes /  approve-status. *Very small* changes are auto-approved.

# Better practice with percy
## Make sure snapshots are taken at the right moment
- Make cypress / percy wait *explicitly* for 3 seconds with `cy.wait(3000)` (bad practice)
- Make cypress / percy wait *implicitly* i.e. for a specific element to load before taking snapshot (better practice). For example:
```javascript
// This will naturally wait for the element to fully load.
cy.get({element}).should('be.visible')

cy.percySnapshot();
```