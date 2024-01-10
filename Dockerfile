FROM node:alpine

ENV NODE_ENV production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY . .

RUN corepack enable

RUN pnpm i

RUN pnpm build

CMD [ "pnpm" ,"start"]