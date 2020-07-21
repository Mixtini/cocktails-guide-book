# Development Guide

Dependency
* Nodejs
* Firebase cli

```sh
npm install -g firebase-tools
```

## Start with firebase

### Firebase login

Please login with your google account

```sh
firebase login
```

### Init firebase with existing project
```sh
firebase init
```
choose your project name. ex: ```overpartylab```

## Develop web portal

We use React.js to build our webapp. Source code are in /app folder.

### Install dependency

```sh
yarn install
```

### Run the react app in developing mode
```sh
yarn start
```

### Build react file

```sh
yarn build
```


## Deploy services

After login firebase, please run the script <strong>under the script folder</strong>

### Deploy web portal
```sh
sh deploy.sh
```

## Reference
* [Over Party Lab](https://www.instagram.com/over.party.lab/)
* [How to use firebase host](https://medium.com/p/41abf06db13d)
