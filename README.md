# automation-annikarengfelt

Clone repo to your local machine

## Setup Tester Hotel
Open rasi10-hotel-test-vue in terminal and command
```
npm run install
npm run build
```
This will create directories 'node_modules' and 'dist' so that you can run the application using the command
```
npm run start
```
If the application starts successfully, the terminal will clear and you'll be able to access the app via localhost url
### Trouble?
Hotel tester app needs to be run on nvm 12. If the app doesn't install or build properly, use these commands:
```
nvm use 12
npm update
npm cache clean --force
```

## Setup cypress
Open  frontend-tests/cypress in terminal and command
```
npm init -y
npm install cypress --save-dev
```

## Run cypress
Using prepared scripts in the package.json-file

Run cypress via browser
```
npm run cypress:open
```

Run cypress headless
```
npm run cypress:run
```