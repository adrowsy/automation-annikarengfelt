# Get started

Clone repo to your local machine

## Setup Tester Hotel
Clone https://github.com/rasi10/rasi10-hotel-test-vue.git repo and place it in the project directory
Open rasi10-hotel-test-vue in terminal and command

The app is build on earlier versions, use workarounds
```
nvm use 12
npm update
```

Install and build app
```
npm install
npm run build
```
Expected result: Directories 'node_modules' and 'dist' are created

Run the application using the command
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

## Setup cypress
Open  frontend-tests in terminal and command
```
npm install cypress --save-dev
```
Expected result: Directory 'node_modules' are created

## Run cypress
Using prepared scripts in the package.json-file

Run cypress via browser
```
npm run cypress:open
```

Run cypress headless with mochawesome reporter
```
npm run cypress:run
```