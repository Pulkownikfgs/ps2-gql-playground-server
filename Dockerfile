FROM node:14.17.3-alpine3.13 AS install

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

FROM install AS lint

COPY src ./src
COPY .prettierrc.json .
COPY .prettierignore .
COPY .eslintrc.js .
COPY .eslintignore .
RUN yarn lint:format
RUN yarn lint

FROM lint AS build

COPY tsconfig.json .
RUN yarn build

FROM lint AS test

COPY babel.config.js .
COPY jest.config.js .
RUN yarn test

FROM build 
ENV SERVICE_ID=
CMD ["yarn", "start"]