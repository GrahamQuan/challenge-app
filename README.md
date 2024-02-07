# Coding Challenge

## Challenge 1 (logic)

file: `lib/sum.ts`

how to run:

1. open file and copy the code
2. open typescript playground online and paste the code
3. run it

## Challenge 2 (back-end)

folder: `api`

preset

1. change `.env.example` to `.env.local`
2. if we wanna change PORT, change `.env.local` file

how to run:

```sh
cd ./api
pnpm i

# dev mode
pnpm run dev

# test
pnpm run test

# prod mode
pnpm run build
pnpm run start
```

file sturcture

```sh
api
├── src
│   ├── __test__
│   │   └── index.test.ts
│   ├── middlewares
│   │   ├── log.ts
│   │   └── notFound.ts
│   ├── routes
│   │   ├── about.ts
│   │   └── root.ts
│   ├── app.ts
│   └── index.ts
├── .env.local
├── package.json
└── tsconfig.json
```

dependencies using

```json
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.11.16",
    "@types/supertest": "^6.0.2",
    "jest": "^29.7.0",
    "nodemon": "^3.0.3",
    "rimraf": "^5.0.5",
    "supertest": "^6.3.4",
    "ts-jest": "^29.1.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "dotenv": "^16.4.1",
    "express": "^4.18.2"
  }
```

why choose these libraries?

- express: CRUD api
- nodemon: hot reload
- rimraf: clear dist folder before build (cross platform)
- ts-node: typescript with node
- typescript: types
- dotenv: read env variables
- jest: test
- supertest: api test

## Challenge 3 (front-end)

folder: `client`

how to run:

```sh
cd ./client
pnpm i

# dev mode
pnpm run dev

# test
pnpm run test

# prod mode
pnpm run build
pnpm run preview
```

(vite + react) file sturcture

```sh
client
├── cypress
│   └── e2e
│       └── login.cy.ts
├── src
│   ├── components
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

front-end notes

- if we validate our email/password when inputing, UX will be better (using debounce)
- front-end and back-end should be connected, like creating a `/login` api (back-end need to deal with cors and json request)
- react + typescript + from, this takes some time to deal with the types
- e2e test with cypress
