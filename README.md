# Giphy image search

![alt text](https://cdn.iconscout.com/icon/free/png-256/giphy-461796.png)

## Intro
This project is created with the idea of a simple GIPHY image search and list.

1. SCSS - used for the purpous of an easy to write css and more manageable.
2. Redux - used with the idea of scalibility in the future
3. redux-promise-middleware - integrated with Axios is also part of scalibility idea
4. Bootstrap - to make some changes to UI faster and for Grid system, responsivnes

## Usage
`npm i` - to install dependencies

Than execute one of scripts you want.

## Sctipts
`npm start` for running

`npm run test` run tests

`npm run build` to build for production

## Directories
```
├── public/                         (project root)
│   ├── favicon.ico                 (Project favicon)
│   ├── index.html
│   ├── index.js
│
├── src/                            (project root)
│   ├── Actions/                    (Redux actions)
│   ├── Components/                 (Component without logic)
│   ├── Containers/                 (Components with logic)
│   ├── Reducers/                   (maintaining reducers)
│   ├── scss/                       (Scss files)
│   │    ├── css/                   (Converted scss)
│   │    └── style.scss             (Main scss file)
│   ├── tests/                      (Unit tests)
│   │    └── _snapshots_/           (Components snapshot for tests)
│   ├── App.js                      (Wrapper for other main components)
│   ├── index.js                    (main entrypoint)
│   └── store.js                    (maintaining stores and midlewares)
│
├── .gitignore
├── package.json
└── README.md

```


## What can be improved
1. More tests
2. UI can be done better
3. Usage of styled components
4. We could separate it in more components if i used react hooks.
